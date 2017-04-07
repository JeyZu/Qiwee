Router.configure({
	layoutTemplate: 'main',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() {return Meteor.subscribe('posts')}
});

Router.route('/', {name: 'home'});

Router.route('/register', {name: 'register'});

Router.route('/login', {name: 'login'});

Router.route('/forum', {name: 'forum'});

Router.route('/forum/post/:_id', {
	name: 'postPage',
	data: function() {return Posts.findOne(this.params._id)}
});

Router.route('/forum/post/:_id/edit', {
	name: 'postEdit',
	data: function() {return Posts.findOne(this.params._id);}
});

Router.route('/forum/submit', {name: 'postSubmit'});

var requireLogin = function()
{
	if (! Meteor.user())
		if (Meteor.loggingIn()) 
		    this.render(this.loadingTemplate);
		else
			this.render('accessDenied');
	else
		this.next();
}

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'})
