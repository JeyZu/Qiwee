Template.navigation.helpers({
	activeRouteClass: function() {
		var args = Array.prototype.slice.call(argument, 0);
		args.pop();

		var active = _.any(args, function(name) {
			return Router.current() && Router.current().route.getName() === name
		});

		console.log(active);
		console.log(args);

		return active && 'active';
	}
});