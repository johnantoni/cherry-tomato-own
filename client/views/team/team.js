Template.team.helpers({
  everyone: function() {
    // return allUsers;
    return Meteor.users.find().fetch();
  }
});
