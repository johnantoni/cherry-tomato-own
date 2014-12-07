Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});


notifyMe = function() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check if the user is okay to get some notification
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  // Note, Chrome does not implement the permission static property
  // So we have to check for NOT 'denied' instead of 'default'
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user is okay, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }
};

title = function () {
  if (Meteor.user()) {
    document.title = formattedRemaining(currentPomodoro(Meteor.user())) ;
    // var notification = new Notification(document.title);
  }
};

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

Meteor.startup(function () {
  Meteor.setInterval(function (){Session.set("now", Date.now());}, 250);

  Tracker.autorun(function() {
    title();
  });
});
