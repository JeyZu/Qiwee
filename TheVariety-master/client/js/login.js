Template.login.events({
	"submit form": function(e, template) {
		e.preventDefault();

		var user = $('input[name="username"]').val();
		var password = $('input[name="password"]').val();

		Meteor.loginWithPassword(
			user,
			password,
			function(err) {
				if (err)
					alert(err.reason);
			}
		);
	}
});