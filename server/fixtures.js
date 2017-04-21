
// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users

  var sachaId = Accounts.createUser({
    profile: {
      name: 'Jérémie Quatorze'
    },
    username: "JeyZu",
    email: "jeyzu@example.com",
    password: "123456",
  });

  var sacha = Meteor.users.findOne(sachaId);

  Roles.addUsersToRoles(sachaId, ['admin'], 'team-qiwee');

  var telescopeId = Posts.insert({
    title: 'Introducing Qiwee',
    userId: sacha._id,
    author: sacha.profile.name,
    message: 'Qiwee!',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 1,
    upvoters: [], votes: 0
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project, can I get involved?'
  });
}