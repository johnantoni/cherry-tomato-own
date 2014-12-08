Template.pomodoroItem.helpers({
  formattedRemaining: function () {
    return formattedRemaining(this);
  }
});

Template.pomodoroItem.events({
  'click .delete' : function (e) {
    Pomodoros.remove(this._id);
    cancelNotification();
  }
});
