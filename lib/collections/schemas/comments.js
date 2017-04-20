Comments.attachSchema(new SimpleSchema({
	postId: orion.attribute('hasOne', {
		label: 'Publication',
	}, {
		collection: Posts,
		titleField: 'title',
		publicationName: 'someRandomString',
	}),
	userId: orion.attribute('hasOne', {
		type: String,
		label: 'Auteur',
		optional: false
	}, {
    	collection: Meteor.users,
    	titleField: 'profile.name',
    	publicationName: 'anotherRandomString',
  	}),
	author: {
		type: String,
		optional: false,
		autoform: {
			type: 'hidden',
			label: false
		}
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