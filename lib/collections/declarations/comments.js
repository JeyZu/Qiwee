Comments = new orion.collection('comments', {
	singularName: 'comment',
	pluralName: 'comments',
	link: {
		title: 'Commentaires'
	},
	tabular: {
		columns: [
			{
				data: "author",
				title: "Auteur",
			}, {
				data: "postId",
				title: "Post ID",
				render: function(val, type, doc) {
					return Posts.findOne(val).title;
				}
			}, 
			orion.attributeColumn('createdAt', 'submitted', 'Crée le'),
		]
	}
});

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

		comment._id = Comments.insert(comment);

		createCommentNotification(comment);

		return comment._id;
	}
});