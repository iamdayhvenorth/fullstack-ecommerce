import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthError, CredentialsSignin, type NextAuthConfig } from "next-auth";
import { loginSchema } from "./schemas/userSchema";
import bcrypt from "bcryptjs";
import { prisma } from "./lib/prisma";

class CustomError extends CredentialsSignin {
  constructor(message: string) {
    super(message);
    this.message = message;
  }
  code = "custom_error";
}

export default {
  providers: [
    GithubProvider,
    GoogleProvider,
    CredentialsProvider({
      async authorize(credentials) {
        const result = loginSchema.safeParse(credentials);
        if (!result.success)
          throw new CustomError("Please email and password are required");
        const { email, password } = result.data;

        const user = await prisma.user.findFirst({
          where: { email },
        });

        if (!user || !user.password)
          throw new CustomError("Invalid email/password");

        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) throw new CustomError("Invalid email/password");

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
} satisfies NextAuthConfig;
