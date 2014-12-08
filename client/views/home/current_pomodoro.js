Template.currentPomodoro.helpers({
  currentPomodoro: function () {
    return currentPomodoro(Meteor.user());
  }
});

Template.currentPomodoro.events({
  'submit #new-pomodoro' : function (e) {
    e.preventDefault();

    var pomodoro = {
      userId: Meteor.userId(),
      startDate: new Date(),
      goal: e.target.goal.value,
    };

    Pomodoros.insert(pomodoro);
  }
});
