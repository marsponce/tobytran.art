import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  allowedDevOrigins: ['192.168.1.23', '192.168.0.19'],
  redirects: async () => [
    {
      source: '/admin',
      destination: '/admin/index.html',
      permanent: false,
    },
  ],
};

export default nextConfig;
