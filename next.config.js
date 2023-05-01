const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination: process.env.NODE_ENV === "development" ? "http://localhost:3333/studio/:path*" : "/studio/index.html",
};

module.exports = {
  images: {
    domains: ["cdn.sanity.io", "images.pexels.com"],
  },
  rewrites: () => [STUDIO_REWRITE],
  reactStrictMode: false,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },
};
