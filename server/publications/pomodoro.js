Meteor.publish("myPomodoros", function (){
  return Pomodoros.find({userId: this.userId}, {sort: {startDate: -1}});
});

Meteor.publish("followerPomodoros", function (followerIds) {
  if (!this.userId) { this.ready(); return; }

  // followerIds is passed in to ensure reactivity when it changes, but let's
  // not trust it, use the user's current set instead
  followerIds = Meteor.users.findOne({_id: this.userId}).followers || []

  return Pomodoros.find(
    {$and: [
      {userId: {$in: followerIds}},
      {startDate: {$gt: Date.create(POMODORO_LENGTH + ' minutes ago')}}
    ]},
    {sort: {startDate: -1}}
  );
});
