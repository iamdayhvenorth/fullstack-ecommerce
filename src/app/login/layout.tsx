import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "This is the Login page",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
