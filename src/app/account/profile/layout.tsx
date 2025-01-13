import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "This is the Profile page",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
