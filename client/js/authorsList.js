Template.authorsList.helpers({
	authors: function(filter) {
		return Posts.aggregate([
			{
				$match: {submitted : '$'+filter}
			},
			{
				$group: {_id: "$author", posts: {$push: "$title"}, countComments: {$sum: 1}}
			}
		]);
	}
});