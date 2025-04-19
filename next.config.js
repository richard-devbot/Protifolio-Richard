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
  },
  // Add these settings for better performance and error handling
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // Disable server-side rendering for components that use browser APIs
  experimental: {
    // This helps with hydration issues
    optimizeCss: true,
    // Increase the timeout for static generation
    staticPageGenerationTimeout: 180,
  }
}
