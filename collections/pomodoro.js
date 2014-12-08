var pomodoro = {
  endDate: function () {
    return ((POMODORO_LENGTH).minutesAfter(this.startDate));
  },
  remaining: function () {
    return this.endDate().getTime() - Date.now();
  },
  done: function () {
    return this.remaining() < 0;
  },
};

Pomodoros = new Meteor.Collection("Pomodoros", {
  transform: function (doc) { return _.extend(Object.create(pomodoro), doc); }
});

var ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
};

Pomodoros.allow({
  insert: ownsDocument,
  update: ownsDocument,
  remove: ownsDocument,
});
