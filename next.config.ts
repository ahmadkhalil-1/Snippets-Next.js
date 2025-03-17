import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.experiments = { layers: true }; // Ensure Webpack is used
    return config;
  },
};

export default nextConfig;
