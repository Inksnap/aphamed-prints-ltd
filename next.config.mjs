/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  turbopack: {
    // Ensure Turbopack resolves the correct project root when multiple lockfiles exist
    root: './',
  },
};

export default nextConfig;
