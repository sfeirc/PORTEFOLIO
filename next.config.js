/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/PORTEFOLIO',
  assetPrefix: '/PORTEFOLIO/',
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'avatars.githubusercontent.com',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'placehold.co',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'encrypted-tbn0.gstatic.com',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'play-lh.googleusercontent.com',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'fenelon-notredame.com',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'cdn-icons-png.flaticon.com',
      pathname: '/**',
    }
  ],
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig; 