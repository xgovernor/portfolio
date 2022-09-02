/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
	title: "Block Content",
	name: "blockContent",
	type: "array",
	of: [
		{
			title: "Block",
			type: "block",
			// Styles let you set what your user can mark up blocks with. These
			// correspond with HTML tags, but you can set any title or value
			// you want and decide how you want to deal with it where you want to
			// use your content.
			styles: [
				{ title: "Normal", value: "normal" },
				{ title: "H1", value: "h1" },
				{ title: "H2", value: "h2" },
				{ title: "H3", value: "h3" },
				{ title: "H4", value: "h4" },
				{ title: "H5", value: "h5" },
				{ title: "H6", value: "h6" },
				{ title: "Preformatted", value: "pre" },
				{ title: "Quote", value: "blockquote" },
			],
			lists: [{ title: "Bullet", value: "bullet" }],
			// Marks let you mark up inline text in the block editor.
			marks: {
				// Decorators usually describe a single property – e.g. a typographic
				// preference or highlighting by editors.
				decorators: [
					{ title: "Strong", value: "strong" },
					{ title: "Emphasis", value: "em" },
				],
				// Annotations can be any object structure – e.g. a link or a footnote.
				annotations: [
					{
						title: "URL",
						name: "link",
						type: "object",
						fields: [
							{
								title: "URL",
								name: "href",
								type: "url",
							},
						],
					},
				],
			},
		},
		// You can add additional types here. Note that you can't use
		// primitive types such as 'string' and 'number' in the same array
		// as a block type.
		{
			type: "image",
			options: { hotspot: true },
			fields: [
				{
					name: "caption",
					type: "string",
					title: "Caption",
					options: {
						isHighlighted: true, // <-- make this field easily accessible
					},
				},
				{
					// Editing this field will be hidden behind an "Edit"-button
					name: "attribution",
					type: "text",
					title: "Attribution",
				},
			],
		},
		// {
		// 	name: "code",
		// 	type: "code",
		// 	title: "Code",
		// },
	],
};
