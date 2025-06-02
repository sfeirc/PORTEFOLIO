import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/PORTFOLIO' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/PORTFOLIO/' : '',
};

export default nextConfig;
