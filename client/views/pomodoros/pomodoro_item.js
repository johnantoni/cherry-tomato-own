Template.pomodoroItem.events({
  'click .delete' : function (e) {
    Pomodoros.remove(this._id);
    cancelNotification();
  }
});

Template.pomodoroItem.helpers({
  formattedRemaining: function() {
    return formattedRemaining(this);
  }
});
