// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
	console.log("RESPONSE: ", {
		status: req.status,
		method: req.method,
		body: req.body,
		query: req.query,
		headers: req.headers,
	});

	switch (req.method) {
		case "GET":
			return res.status(200).json({
				status: req.status,
				method: req.method,
				body: req.body,
				query: req.query,
				headers: req.headers,
			});

		case "POST":
			return res.status(200).json({
				status: req.status,
				method: req.method,
				body: req.body,
				query: req.query,
				headers: req.headers,
			});

		default:
			return;
	}
}
