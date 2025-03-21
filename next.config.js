/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['marinashipyard.com'],
    unoptimized: true,
  },
  // Add output configuration for static exports
  output: 'export',
  // Disable image optimization for static export
  // This helps with deployment issues
  distDir: 'build',
};

module.exports = nextConfig;