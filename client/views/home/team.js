Template.team.helpers({
  team: function () {
    return team(Meteor.userId());
  }
});
