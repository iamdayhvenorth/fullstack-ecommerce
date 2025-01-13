import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order History",
  description: "This is the Order History page",
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
