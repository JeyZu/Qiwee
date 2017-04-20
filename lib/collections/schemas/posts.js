Posts.attachSchema(new SimpleSchema({
	title: {
		type: String,
		optional: false,
		label: 'Titre',
	},
	message: {
		type: String,
		optional: false,
		label: 'Message',
	},
	userId: orion.attribute('hasOne', {
		type: String,
		label: 'Auteur',
		optional: false,
	}, {
		collection: Meteor.users,
		titleField: 'profile.name',
		publicationName: 'againAnotherRandomString',
	}),
	author: {
		type: String,
		optional: false,
		autoform: {
		  type: 'hidden',
		  label: false
		},
	},
	submitted: {
		type: Date,
		optional: false,
		label: "Soumis le",
	},
	commentsCount: {
		type: Number,
		optional: false,
		label: "Compteur commentaire",
	},
	upvoters: {
		type: [String],
		optional: true,
		autoform: {
			disabled: true,
			label: false,
		},
	},
	votes: {
		type: Number,
		optional: true,
	},
	comment: orion.attribute('hasMany', {
		type: [String],
		label: 'Commentaires',
		optional: true,
	}, {
		collection: Comments,
		titleField: 'body',
		publicationName: 'someOtherRandomString',
	}),
}));


