import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description: "This is the Products page",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
