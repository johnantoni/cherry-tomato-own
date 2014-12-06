// Publish the logged in user's posts
Meteor.publish("pomodoros", function () {
  return Pomodoros.find({ createdBy: this.userId }, {sort: {startDate: -1}});
});
