Posts = new Meteor.Collection('posts');

Posts.allow({
	update: function(userId, post) { 
		return ownsDocument(userId, post); 
	},
	remove: function(userId, post) { 
		return ownsDocument(userId, post);
	},
});

Posts.deny({ 
	update: function(userId, post, fieldNames) {
	    // may only edit the following two fields:
	    return (_.without(fieldNames, 'title', 'message').length > 0);
	}
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
			commentsCount: 0
		});

		var postId = Posts.insert(post);

		return {
			_id: postId
		};
	}
});
