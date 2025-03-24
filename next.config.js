/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['marinashipyard.com'],
    unoptimized: true,
  },
  // Use Pages Router explicitly
  experimental: {
    appDir: false,
  },
  swcMinify: true,
};

module.exports = nextConfig;