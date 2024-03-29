Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

var onePomodoroAgo = function () {
  return (POMODORO_LENGTH).minutesBefore(Session.get("now"));
};

currentPomodoro = function (user) {
  var userId = user && user._id;
  return Pomodoros.findOne({userId: userId, startDate: {$gt: onePomodoroAgo()}}, {sort: {startDate: -1}});
};

completedPomodoros = function (user) {
  var userId = user && user._id;
  return Pomodoros.find({userId: userId, startDate: {$lt: onePomodoroAgo()}}, {sort: {startDate: -1}});
};

formattedRemaining = function (pomodoro) {
  if (pomodoro.done()) {
    return "0:00";
  }
  remainingAsSeconds = (pomodoro.remaining() / 1000).floor()
  minutes = Math.floor(remainingAsSeconds / 60).toString();
  seconds = remainingAsSeconds % 60;
  return minutes.toString() + ":" + seconds.pad(2);
};

var setTitle = function () {
  if (currentPomodoro(Meteor.user())) {
    document.title = formattedRemaining(currentPomodoro(Meteor.user())) + " - Tomato";
  } else {
    document.title = "Tomato";
  }
};

Meteor.startup(function () {
  Meteor.setInterval(function (){Session.set("now", Date.now());}, 250);
  Tracker.autorun(setTitle);
});
