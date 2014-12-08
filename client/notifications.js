// TODO currently multiple windows will each create a notification.

var wasRunning;

cancelNotification = function () {
  wasRunning = false;
};

var notifyIfRecentlyFinished = function () {
  if (currentPomodoro(Meteor.user())) {
    wasRunning = true;
  } else {
    // it *was* running the last time we checked but isn't now
    if (wasRunning) {
      console.log("Time's up! " + new Date());
      new Notification("Take a break!", {body: "Way to go, you completed another Pomodoro!"});
      wasRunning = false;
    }
  }
};

Meteor.startup(function () {
  Notification.requestPermission( function (status) {
    console.log("Notification status: " + status);
  });
  Tracker.autorun(notifyIfRecentlyFinished);
});
