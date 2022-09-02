export default {
	name: "article",
	title: "Article",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			title: "Report",
			name: "report",
			type: "object",
			fields: [
				{
					name: "status",
					title: "Status",
					type: "boolean",
				},
				{
					name: "message",
					title: "Message",
					type: "string",
				},
			],
			description: "This switche truned on if this content get reported.",
		},
		{
			name: "featured",
			title: "Featured",
			type: "boolean",
			description: "To show a content in featured section.",
		},
		{
			title: "Excerpt",
			name: "excerpt",
			type: "text",
			options: {
				minLength: 130,
				maxLength: 200,
			},
		},
		{
			title: "Thumbnail",
			name: "image",
			type: "image",
			fields: [
				{
					title: "Caption",
					name: "caption",
					type: "blockContent",
				},
				{
					title: "Alt",
					name: "alt",
					type: "string",
				},
			],
			options: {
				hotspot: true,
			},
		},
		{
			name: "category",
			title: "Categories",
			type: "array",
			of: [{ type: "reference", to: { type: "category" } }],
		},
		{
			name: "topic",
			title: "Topic",
			type: "array",
			of: [{ type: "reference", to: { type: "topic" } }],
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
		{
			name: "references",
			title: "References",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "title",
							title: "Title",
							type: "string",
						},
						{
							name: "url",
							title: "URL",
							type: "url",
						},
					],
				},
			],
		},
		{
			name: "importantLinks",
			title: "Important Links",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "type",
							title: "Type",
							type: "string",
						},
						{
							name: "title",
							title: "Title",
							type: "string",
						},
						{
							name: "url",
							title: "URL",
							type: "url",
						},
					],
				},
			],
		},
		{
			name: "removed",
			title: "Removed",
			type: "boolean",
			description: "This switche truned on if this content deleted by user.",
		},
	],
	initialValue: () => ({
		report: {
			status: false,
		},
		approved: false,
		featured: false,
		publishedAt: new Date().toISOString(),
		removed: false,
	}),
	preview: {
		select: {
			title: "title",
			category: "category.title",
			media: "image",
		},
		prepare(selection) {
			const { category } = selection;
			return Object.assign({}, selection, {
				subtitle: category && `by ${category}`,
			});
		},
	},
};
