import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Disables ESLint checks during `next build`
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Optional: keep any other config you need
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
