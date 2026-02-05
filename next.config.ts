import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images for Vercel deployment
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  // Enable React strict mode for better debugging
  reactStrictMode: true,
};

export default nextConfig;
