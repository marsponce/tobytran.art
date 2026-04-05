import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    viewTransition: true,
  },
};

module.exports = {
  allowedDevOrigins: ['192.168.1.23'],
};

export default nextConfig;
