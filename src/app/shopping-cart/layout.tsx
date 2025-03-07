import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "This is the shopping cart page",
};

export default function ShoppingCartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
