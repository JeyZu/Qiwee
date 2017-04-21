Meteor.users.after.insert(function(userId, doc) {
	Roles.addUsersToRoles(doc._id, ['admin'], 'team-qiwee');
});