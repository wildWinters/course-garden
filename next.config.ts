import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: true,
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
