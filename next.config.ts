import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/tucheng-store', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;