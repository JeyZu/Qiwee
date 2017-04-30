Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY',
	requestPermissions: {
	    twitch: [
	    	'user_read',
	    	'channel_read',
	    	'channel_editor',
	    	'channel_commercial',
	    	'channel_subscriptions',
	    	'channel_check_subscription'
	    ]
	}
});
accountsUIBootstrap3.setLanguage('fr');