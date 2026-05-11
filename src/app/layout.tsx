import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "【新北土城重劃區金店面出租】",
  description: "權狀80坪/超大面寬9m/開門即公園/鄰近公車站，適合各大品牌進駐。屋主自租，仲介勿擾。",
  icons: {
    // 將您的 favicon.ico 放在 public 資料夾下即可自動抓取
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "【新北土城重劃區金店面出租】超大面寬黃金店面",
    description: "權狀80坪/超大面寬9m/開門即公園/鄰近公車站。誠信出租，歡迎預約看屋！",
    url: "https://您的github帳號.github.io/tucheng-store-rental",
    siteName: "土城金店面出租",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", // 建議替換成真實店面照片網址
        width: 1200,
        height: 630,
        alt: "土城店面實景",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>{children}</body>
    </html>
  );
}