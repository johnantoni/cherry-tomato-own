Template.pomodoroItem.events({
  'click .delete' : function (e) {
    e.preventDefault();
    Pomodoros.remove(this._id);
  }
});