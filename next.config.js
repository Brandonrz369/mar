/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['marinashipyard.com'],
    unoptimized: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;