// Add extra attributes to Meteor.user()
Meteor.publish("self", function () {
  if (!this.userId) { this.ready(); return; }

  return Meteor.users.find({_id: this.userId}, {fields: userFields});
});

Meteor.publish("singleUser", function (username) {
  return Meteor.users.find({username: username}, {fields: userFields});
});

Meteor.publish("team", function () {
  if (!this.userId) { this.ready(); return; }

  return team(this.userId);
});

Meteor.publish("findUsers", function (username) {
  if (username) {
    username = username.replace(/[^\w\d]*/, '');
  }
  var regex = new RegExp(username, 'i');
  return Meteor.users.find({username: regex}, {fields: userFields, limit: 100});
});
