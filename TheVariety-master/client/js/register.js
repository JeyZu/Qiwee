Template.register.events({
	"submit form": function(e, template) {
		e.preventDefault();

		var username = $('input[name="username"]').val();
		var email = $('input[name="email"]').val();
		var password = $('input[name="password"]').val();

		var user = {
			username: username,
			email: email,
			password: password
		};

		Accounts.createUser(user, function(err) {
			if(err)
				alert(err.reason)
			else
				Router.go('home');
		}); 
	}
});