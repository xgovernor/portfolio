module.exports = {
	images: {
		domains: ["images.pexels.com", "cdn.sanity.io"],
	},
	reactStrictMode: true,
	swcMinify: true,
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
