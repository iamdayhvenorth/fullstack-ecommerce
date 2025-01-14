import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../myComponents/Navbar";
import Footer from "@/myComponents/Footer";
import BreadCrumb from "@/myComponents/BreadCrumb";

export const metadata: Metadata = {
  title: "Clicon e-commerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* breadCrumbs */}
        {/* <BreadCrumb /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
