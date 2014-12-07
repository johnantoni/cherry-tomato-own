// Publish the logged in user's posts
Meteor.publish("pomodoros", function () {
  return Pomodoros.find({}, {sort: {startDate: -1}});
});

Meteor.publish("allUsers", function() {
  return Meteor.users.find().fetch();
});
