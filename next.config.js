<<<<<<< HEAD
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

=======
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

>>>>>>> 1f294229d1805894f2fae64c539cf4e049c18e2d
module.exports = nextConfig; 