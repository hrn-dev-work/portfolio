import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Backend Engineer Portfolio",
  description: "7-8 years experienced backend engineer portfolio."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <body>{children}</body>
    </html>
  );
}
