import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "This is the register page",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
