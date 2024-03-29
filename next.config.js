const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] },
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
