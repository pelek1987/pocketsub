import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pocketsub App",
  description: "Manage subsciptions with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
