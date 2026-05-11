/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 啟用靜態 HTML 匯出
  images: {
    unoptimized: true, // GitHub Pages 不支援 Next.js 圖片優化 API
  },
};
export default nextConfig;