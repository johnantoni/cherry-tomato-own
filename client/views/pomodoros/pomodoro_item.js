Template.pomodoroItem.events({
  'click .delete' : function (e) {
    e.preventDefault();
    Pomodoros.remove(this._id);
  }
});

Template.pomodoroItem.helpers({
  timeRemaining: function() {
    return formattedRemaining(this);
  }
});
