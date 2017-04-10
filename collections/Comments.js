Comments = new Meteor.Collection('comments');

Meteor.methods({
	commentInsert: function(commentAttributes) {

		var user = Meteor.user();
		var post = Posts.findOne(commentAttributes.postId);
		if(!post)
			throw new Meteor.Error('invalid-comment', 'Vous devez commenter sur un post');

		comment = _.extend(commentAttributes, {
			userId: user._id,
			author: user.username,
			submitted: new Date()
		});

		Posts.update(comment.postId, {$inc: {commentsCount: 1}});

		return Comments.insert(comment);
	}
});