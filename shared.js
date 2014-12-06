// In a file loaded on the client and server
Pomodoros.allow({
  insert: function (userId, pomodoro) {
    // can only create posts where you are the author
    return pomodoro.createdBy === userId;
  },
  remove: function (userId, pomodoro) {
    // can only delete your own posts
    return pomodoro.createdBy === userId;
  }
  // since there is no update field, all updates
  // are automatically denied
});
