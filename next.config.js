/** @type {import('next').NextConfig} */

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

const options = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  reactStrictMode: false, // Recommend enabling strict mode for development
  poweredByHeader: false, // Hides "X-Powered-By: Next.js" header for security
  headers: async () => [
    {
      source: "/(.*)", // Applies to all routes
      headers: [
        { key: "X-Developed-By", value: "Dot9" },
        { key: "X-Developed-By-Url", value: "https://at-mah.vercel.app" },
        { key: "X-DNS-Prefetch-Control", value: "on" },
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains; preload",
        },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "same-origin" },
        {
          key: "Permissions-Policy",
          value: "geolocation=()",
        },
      ],
    },
    {
      source: "/_next/static/(.*)", // Caching for static files
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
};

module.exports = options;
// module.exports = withBundleAnalyzer(options);
