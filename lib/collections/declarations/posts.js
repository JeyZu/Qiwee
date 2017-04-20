Posts = new orion.collection('posts', {
	singularName: 'post',
	pluralName: 'posts',
	link: {
		title: 'Publications'
	},
	tabular: {
		columns: [
			{
				data: "title",
				title: "Titre",
			}, {
				data: "author",
				title: "Auteur",
			}, {

			} {
				data: "submitted",
				title: "Submitted",
			},
		]
	}
});

Posts.allow({
	update: function(userId, post) { 
		return ownsDocument(userId, post); 
	},
	remove: function(userId, post) { 
		return ownsDocument(userId, post);
	},
});

validatePost = function(post) {
	var errors = {};
	if(!post.title)
		errors.title = "Merci de renseigner un titre";
	if(!post.message)
		errors.message = "Vous n'avez saisie aucun message";
	return errors;
}

Meteor.methods({
	postInsert: function(postAttributes) {
	
		var user = Meteor.user();
		var post = _.extend(postAttributes, {
			userId: user._id,
			author: user.username,
			submitted: new Date(),
			commentsCount: 0,
			upvoters: [],
			votes: 0
		});

		var postId = Posts.insert(post);

		return {
			_id: postId
		};
	},

	upvote: function(postId) {
		var affected = Posts.update({
			_id: postId,
			upvoters: {$ne: this.userId}
		}, {
			$addToSet: {upvoters: this.userId},
			$inc: {votes: 1}
		});

		if(!affected)
			throw new Meteor.Error('invalid', "You can't vote for this post.");
	}
});