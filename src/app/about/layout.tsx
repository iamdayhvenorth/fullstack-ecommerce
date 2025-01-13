import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "This is the about page",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
