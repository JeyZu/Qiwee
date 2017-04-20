Template.main.events({
	"click .logout": function(event, template) {
		Meteor.logout();
	}
});
