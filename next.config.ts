import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/PORTEFOLIO' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/PORTEFOLIO/' : '',
};

export default nextConfig;
