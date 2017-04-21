Template.registerHelper('pluralize', function(n, thing) {
	if(n === 1) 
		return '1 ' + thing;

	return n + ' ' + thing + 's';
});

Template.registerHelper('and', function(a, b) {
	return a && b
});

Template.registerHelper('or', function(a, b) {
	return a || b
});