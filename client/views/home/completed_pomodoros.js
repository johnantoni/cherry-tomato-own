Template.completedPomodoros.helpers({
  completedPomodoros: function () {
    return completedPomodoros(Meteor.user());
  }
});
