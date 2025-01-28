import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Forgot Password",
  description: "This is the forgot password  page",
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
