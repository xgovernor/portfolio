export default {
	name: "account",
	type: "document",
	title: "Account",
	initialValue: () => ({
		publishedAt: new Date().toISOString(),
		createdAt: new Date().toISOString(),
	}),
	fields: [
		{
			name: "publishedAt",
			type: "datetime",
			title: "Published at",
			// hidden: true,
		},
		{
			name: "status",
			type: "string",
			title: "Status",
			options: {
				list: [
					{ title: "Active", value: "active" },
					{ title: "Inactive", value: "inactive" },
					{ title: "Pending", value: "pending" },
					{ title: "Suspended", value: "suspended" },
					{ title: "Deleted", value: "deleted" },
				],
			},
		},
		{
			name: "title",
			type: "string",
			title: "Title",
			validation: (Rule) => Rule.required().max(255),
		},
		{
			name: "platform",
			type: "string",
			title: "Platform",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "url",
			type: "url",
			title: "URL",
		},

		{
			name: "description",
			type: "text",
			title: "Description",
		},
		{
			name: "firtName",
			type: "string",
			title: "First Name",
			validation: (Rule) => Rule.required().max(56),
		},
		{
			name: "lastName",
			type: "string",
			title: "Last Name",
			validation: (Rule) => Rule.required().max(56),
		},
		{
			name: "email",
			type: "string",
			title: "Email",
			validation: (Rule) => Rule.required().email(),
		},
		{
			name: "password",
			type: "string",
			title: "Password",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "phone",
			type: "string",
			title: "Phone",
		},
		{
			name: "createdAt",
			type: "datetime",
			title: "Created at",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "address",
			type: "text",
			title: "Address",
		},
		{
			name: "securityQuestion",
			type: "array",
			title: "Security Question",
			of: [
				{
					name: "question",
					type: "object",
					title: "Question",
					fields: [
						{
							name: "question",
							type: "string",
							title: "Question",
							validation: (Rule) => Rule.required(),
						},
						{
							name: "answer",
							type: "string",
							title: "Answer",
							validation: (Rule) => Rule.required(),
						},
					],
				},
			],
		},
		{
			name: "note",
			type: "text",
			title: "Note",
		},
	],
};
