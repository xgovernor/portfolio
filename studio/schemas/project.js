export default {
	name: "project",
	title: "Project",
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
			name: "featured",
			title: "Featured",
			type: "boolean",
		},
		{
			name: "liveUrl",
			title: "Live URL",
			type: "url",
		},
		{
			name: "gitUrl",
			title: "Git URL",
			type: "url",
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
			name: "thumbnail",
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
			title: "Category",
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
			name: "role",
			title: "Role",
			type: "array",
			options: {
				editModal: "popover",
			},
			of: [
				{
					name: "title",
					title: "Title",
					type: "string",
				},
			],
		},
		{
			name: "technology",
			title: "Technology",
			type: "array",
			options: {
				editModal: "popover",
			},
			of: [
				{
					name: "title",
					title: "Title",
					type: "string",
				},
			],
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
			name: "removed",
			title: "Removed",
			type: "boolean",
			description: "This switch turned on if this content deleted by user.",
		},
	],
	initialValue: () => ({
		approved: false,
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
