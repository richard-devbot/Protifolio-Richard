const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.medium.com',
        pathname: '**',
      },
    ],
    unoptimized: true,
  },
  // Server-capable build: required for the contact API routes and Medium ISR
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    staticPageGenerationTimeout: 180,
  }
}
