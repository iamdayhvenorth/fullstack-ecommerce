import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "This is the support page",
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
