Template.postItem.helpers({
	ownPost: function() {
		return this.userId === Meteor.userId();
	},
	submittedPost: function() {
		return moment(this.submitted).format('LLL');
	},
	upvotedClass: function() {
		var userId = Meteor.userId();
		if(userId && !_include(this.upvoters, userId))
			return 'btn-primary upvotable';
		else
			return 'disabled';
	}
});

Template.postItem.events({
	'click .upvotable': function(e) {
		e.preventDefault();
		Meteor.call('upvote', this._id);
	}
})