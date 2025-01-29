"use server";

import { auth, signIn, signOut } from "@/auth";
import { z } from "zod";
import {
  addressSchema,
  changePasswordSchema,
  forgotPasswordSchema,
  loginSchema,
  resetPasswordSchema,
  signupSchema,
  updatePersonInfoSchema,
} from "@/schemas/userSchema";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import crypto from "crypto";
import transportMail from "@/lib/mail";
import {
  EMAILVERIFICATION,
  RESET_PASSWORD,
  RESET_SUCCESSFUL,
} from "@/lib/emailTemplates";

export type LoginData = z.infer<typeof loginSchema>;
export type SignupData = z.infer<typeof signupSchema>;
export type PersonalInfoForm = z.infer<typeof updatePersonInfoSchema>;
export type UpdatePassword = z.infer<typeof changePasswordSchema>;
export type ForgotPassEmail = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordForm = z.infer<typeof resetPasswordSchema>;
export type AddressFormData = z.infer<typeof addressSchema>;

const getCurrentUser = async () => {
  const user = await auth();
  return user;
};

export const githubLogin = async () => {
  await signIn("github");
};

export const googleLogin = async () => {
  await signIn("google");
};

export const logout = async () => {
  await signOut();
};

export const loginWithCredentials = async (data: LoginData) => {
  const result = loginSchema.safeParse(data);
  try {
    if (!result.success)
      return { success: false, error: "Email/Password required" };
    const { email, password } = result.data;

    await signIn("credentials", {
      email,
      password,
      redirectTo: "/account/profile",
    });

    return { success: true, message: "Logged in successfully" };
  } catch (error) {
    let errorMsg = "";
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      redirect("/account/profile");
    } else if (error instanceof AuthError) {
      errorMsg = error.message;
    } else {
      errorMsg = (error as any).message;
    }
    return { success: false, error: errorMsg };
  }
};

export const registerUser = async (data: SignupData) => {
  const result = signupSchema.safeParse(data);

  if (!result.success)
    return { success: false, error: "Please all fields are required" };
  const { email, name, password } = result.data;

  try {
    // const duplicateUser = await User.findOne({email})
    const duplicateUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (duplicateUser) return { success: false, error: "Email already exists" };

    // hash the password bfre sending to the db
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // generate email verification code
    const emailVerificationToken = Math.floor(100000 + Math.random() * 900000);

    await prisma.emailVerificationToken.create({
      data: {
        userId: newUser.id,
        token: emailVerificationToken.toString(),
        expires: new Date(Date.now() + 10 * 60 * 1000),
      },
    });

    const transport = await transportMail();
    const mailOptions = {
      from: `DaveCodeSolutions ${process.env.AUTH_EMAIL}`,
      to: newUser.email,
      subject: "Verify Email",
      html: EMAILVERIFICATION.replace(
        "{verificationCode}",
        emailVerificationToken.toString()
      ),
    };

    transport.sendMail(mailOptions, (err, info) => {
      if (err) console.log(err);
      console.log("Email sent: " + info.response);
    });

    return { success: true, message: "user created" };
  } catch (error) {
    let errorMsg = "";
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      redirect("/login");
    } else {
      errorMsg = (error as any).message;
    }
    return { success: false, error: errorMsg };
  }
};

export const updatePersonalInfo = async (data: PersonalInfoForm) => {
  try {
    const result = updatePersonInfoSchema.safeParse(data);
    const session = await auth();
    if (session?.user) {
      if (!result.success)
        return { success: false, error: "Email/Password required" };
      const { email, name } = result.data;

      // verify if user exist in the db
      const user = await prisma.user.findUnique({
        where: {
          id: session.user.id,
        },
      });
      if (!user) return { success: false, error: "User not found" };

      // if user then update
      await prisma.user.update({
        where: { id: user.id },
        data: {
          name,
        },
      });

      return { success: true, message: "profile updated" };
    }

    return { success: false, error: "You are not authenticated" };
  } catch (error) {
    return { success: false, error: (error as any).message };
  }
};

export const changePassword = async (data: UpdatePassword) => {
  const session = await getCurrentUser();
  try {
    if (session?.user) {
      const result = changePasswordSchema.safeParse(data);
      if (!result.success)
        return { success: false, error: "All fields are required" };
      const { oldPassword, newPassword, confirmNewPassword } = result.data;

      // verify authenticated user from the db
      const user = await prisma.user.findUnique({
        where: {
          id: session.user.id,
        },
      });

      if (!user || !user.password)
        return { success: false, error: "you cant perform this action" };

      // compare the encrypted password
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch)
        return { success: false, error: "old password is incorrect" };

      // hash the new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      await prisma.user.update({
        where: { id: user.id },
        data: {
          password: hashedPassword,
        },
      });

      return { success: true, message: "password updated" };
    }
    return { success: false, error: "you are not authenticated" };
  } catch (error) {
    return { success: false, error: (error as any).message };
  }
};

export const forgotPassword = async (data: ForgotPassEmail) => {
  const session = await auth();
  try {
    if (!session?.user) {
      const result = forgotPasswordSchema.safeParse(data);
      if (!result.success)
        return { success: false, error: "Email is required" };

      const { email } = result.data;

      // verify email from the database
      const user = await prisma.user.findFirst({
        where: { email },
      });

      if (!user) {
        return {
          success: false,
          message:
            "if your email is associated with us, a code will be sent. thanks!",
        };
      }

      // before generating token check if one exist rhen delete
      const isToken = await prisma.emailResetToken.findFirst({
        where: {
          userId: user.id,
          expires: {
            gte: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
          },
        },
      });

      if (isToken) {
        await prisma.emailResetToken.delete({
          where: { id: isToken.id },
        });
      }

      // generate token
      const passwordResetToken: string = crypto.randomBytes(16).toString("hex");
      // hash the token before saving to db
      const salt = await bcrypt.genSalt(10);
      const hashedToken = await bcrypt.hash(passwordResetToken, salt);

      // save token to db
      await prisma.emailResetToken.create({
        data: {
          userId: user.id,
          token: hashedToken,
          expires: new Date(Date.now() + 1 * 60 * 60 * 1000), // 1 hour
        },
      });

      // send to email
      const transport = await transportMail();
      const link = `http://localhost:3000/login/forget-password/reset-password?token=${passwordResetToken}&userId=${user.id}`;

      const mailOptions = {
        from: `DaveCodeSolutions ${process.env.AUTH_EMAIL}`,
        to: user.email,
        subject: "Password Reset",
        html: RESET_PASSWORD.replace("{link}", link),
      };

      transport.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err);
        console.log("Email sent: " + info.response);
      });
      return {
        success: true,
        message:
          "if your email is associated with us, a code will be sent. thanks!",
      };
    }

    return { success: false, error: "you cant perform this action" };
  } catch (error) {
    return { success: false, error: (error as any).message };
  }
};

export const resetPassword = async (
  data: ResetPasswordForm,
  token: string | null,
  id: string | null
) => {
  const session = await auth();

  try {
    if (!token || !id) return { success: false, error: "invalid or no token " };

    const result = resetPasswordSchema.safeParse(data);
    if (!result.success)
      return { success: false, error: "all fields are required" };

    if (!session?.user) {
      const { password } = result.data;

      // verify if token match
      const isToken = await prisma.emailResetToken.findFirst({
        where: {
          userId: id,
          expires: {
            gte: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
          },
        },
      });

      if (!isToken)
        return { success: false, error: "Invalid token or token expired" };
      // if token found compare token

      const isMatch = await bcrypt.compare(token, isToken.token);
      if (!isMatch) return { success: false, error: "invalid token" };

      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!user) return { success: false, error: "you are not authorized" };

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          password: await bcrypt.hash(password, 10),
        },
      });

      await prisma.emailResetToken.delete({
        where: { id: isToken.id },
      });

      // send email notification
      const transport = await transportMail();

      const mailOptions = {
        from: `DaveCodeSolutions ${process.env.AUTH_EMAIL}`,
        to: user.email!,
        subject: "Password Reset",
        html: RESET_SUCCESSFUL,
      };

      transport.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err);
        console.log("Email sent: " + info.response);
      });
      return { success: true, message: "password changed" };
    }

    return { success: false, error: "you cant perform this action" };
  } catch (error) {
    return { success: false, error: (error as any).message };
  }
};

export const updateUserAddress = async (data: AddressFormData) => {
  const session = await auth();
  try {
    if (session?.user) {
      const res = addressSchema.safeParse(data);
      if (!res.success)
        return { success: false, error: "all fields are required" };

      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
      });

      if (!user) return { success: false, error: "You are not auhorised" };

      const address = await prisma.address.findFirst({
        where: {
          userId: user.id,
          type: "BILLING",
        },
      });

      // if address not found u can create one or else just update
      if (!address) {
        await prisma.address.create({
          data: {
            userId: user.id,
            zip: res.data.zip,
            city: res.data.city,
            state: res.data.state,
            country: res.data.country,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            address: res.data.address,
          },
        });
        return { success: true, message: "Address created successfully" };
      } else {
        await prisma.address.update({
          where: {
            id: address.id,
            userId: user.id,
          },
          data: {
            zip: res.data.zip,
            city: res.data.city,
            state: res.data.state,
            country: res.data.country,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            address: res.data.address,
          },
        });
        return { success: true, message: "Address updated successfully" };
      }
    } else {
      return { success: false, error: "You are not authenticated" };
    }
  } catch (error) {
    return { success: false, error: (error as any).message };
  }
};
