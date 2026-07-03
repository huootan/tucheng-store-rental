import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/tucheng-store-rental', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;