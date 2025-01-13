import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "This is the wishlist page",
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
