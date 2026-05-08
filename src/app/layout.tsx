import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "HRN | バックエンドエンジニア デジタル名刺",
  description:
    "HRNのデジタル名刺サイト。バックエンドエンジニアとしての経歴、スキル、主要プロジェクト、連絡先を掲載。",
  openGraph: {
    title: "HRN | バックエンドエンジニア デジタル名刺",
    description: "設計と運用に強いバックエンドエンジニア HRN のプロフィール。",
    url: siteUrl,
    siteName: "HRN Digital Business Card",
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "HRN | バックエンドエンジニア デジタル名刺",
    description: "設計と運用に強いバックエンドエンジニア HRN のプロフィール。"
  }
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
