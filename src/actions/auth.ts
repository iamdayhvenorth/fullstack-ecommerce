"use server";

import { auth, signIn, signOut } from "@/auth";
import { z } from "zod";
import {
  changePasswordSchema,
  loginSchema,
  signupSchema,
  updatePersonInfoSchema,
} from "@/schemas/userSchema";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";

export type LoginData = z.infer<typeof loginSchema>;
export type SignupData = z.infer<typeof signupSchema>;
export type PersonalInfoForm = z.infer<typeof updatePersonInfoSchema>;
export type UpdatePassword = z.infer<typeof changePasswordSchema>;

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
    } else if (
      error instanceof Error &&
      error.message === "OAuthAccountNotLinked"
    ) {
      redirect("/about");
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
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return { success: true, message: "user created" };
  } catch (error) {
    return { success: false, error: "error" };
  }
};

export const updatePersonalInfo = async (data: PersonalInfoForm) => {
  try {
    const result = updatePersonInfoSchema.safeParse(data);
    const session = await getCurrentUser();
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
