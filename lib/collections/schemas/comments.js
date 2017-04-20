Comments.attachSchema(new SimpleSchema({
	postId: orion.attribute('hasOne', {
		label: 'Publication',
	}, {
		collection: Posts,
		titleField: 'title',
		publicationName: 'someRandomString',
	}),
	userId {
		type: String,
		optional: false,
		label: "User ID",
	},
	author: {
		type: String,
		optional: false,
		label: "Auteur",
	},
	submitted: {
		type: Date,
		optional: false,
		label: "Soumis le",
	},
	body: {
		type: String,
		optional: false,
		label: "Message",
	},
}));