import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "This is the support page",
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
