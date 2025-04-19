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
    unoptimized: true, // This helps with static export
  },
  // Change to export for static site generation
  output: 'export',
  // Remove the invalid option and keep only valid experimental features
  experimental: {
    optimizeCss: true,
  }
}
