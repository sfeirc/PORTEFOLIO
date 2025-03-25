/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
        pathname: '/images?q=tbn:ANd9GcR-jCR-NJbwCmXWMsk8lw5mdQYDb5vQVti06A&s',
      },
    ],
  },
};

module.exports = nextConfig; 