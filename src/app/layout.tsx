import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 在這裡設定網站的 SEO 與 Open Graph (OG) 標籤
export const metadata: Metadata = {
  title: "土城質感店面誠摯出租",
  description: "權狀80坪/超大面寬9m/開門即公園/鄰近捷運萬大線與金城交流道，適合各大品牌進駐。屋主自租，仲介勿擾。",
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "【新北土城重劃區金店面出租】超大面寬黃金店面",
    description: "權狀80坪/超大面寬9m/開門即公園/鄰近公車站。誠信出租，歡迎預約看屋！",
    url: "https://huootan.github.io/tucheng-store-rental",
    siteName: "土城質感店面誠摯出租",
    images: [
      {
        // OG 圖片必須使用完整的絕對路徑 (包含 https)
        url: "https://huootan.github.io/tucheng-store-rental/p6.jpg",
        width: 1200,
        height: 630,
        alt: "新北土城重劃區金店面室內實景照",
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}