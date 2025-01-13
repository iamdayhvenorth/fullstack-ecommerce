import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Order",
  description: "This is the track order page",
};

export default function TrackOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
