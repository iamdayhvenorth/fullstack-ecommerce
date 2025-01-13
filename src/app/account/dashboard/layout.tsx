import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is the Dashboard page",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
