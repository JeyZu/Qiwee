Template.postItem.helpers({
	ownPost: function() {
		return this.userId === Meteor.userId();
	},
	submittedPost: function() {
		return moment(this.submitted).format('LLL');
	}
});