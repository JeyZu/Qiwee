Template.postItem.helpers({
	canEdit: function() {
		return this.userId === Meteor.userId() || Roles.userIssInRole(Meteor.user(), ['admin']);
	},
	submittedPost: function() {
		return moment(this.submitted).format('LLL');
	},
	upvotedClass: function() {
	    var userId = Meteor.userId();
	    if (userId && !_.include(this.upvoters, userId))
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
});