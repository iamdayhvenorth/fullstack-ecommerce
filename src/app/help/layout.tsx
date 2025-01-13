import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help",
  description: "This is the help page",
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
