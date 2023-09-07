module.exports = {
  images: {
    domains: ["cdn.sanity.io", "images.pexels.com"],
  },
  reactStrictMode: false,
  poweredByHeader: false,
  headers: async () => ([
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Developed-By',
          value: 'Dot9',
        },
        {
          key: 'X-Developed-By-Url',
          value: 'https://at-mah.vercel.app',
        },
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
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
        {
          key: 'Permissions-Policy',
          value: 'geolocation=()',
        },
      ],
    },
  ]),
};
