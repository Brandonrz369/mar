/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['marinashipyard.com'],
    unoptimized: true,
  },
  // Modified for Vercel deployment
  swcMinify: true,
};

module.exports = nextConfig;