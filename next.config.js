module.exports = {
  images: {
    domains: ["cdn.sanity.io", "images.pexels.com"],
  },
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: '*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload', // Matched parameters can be used in the value
          },
        ],
      },
    ]
  },
};

const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/studio/index.html",
};

module.exports = {
  rewrites: () => [STUDIO_REWRITE],
};
