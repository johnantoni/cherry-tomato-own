// affects data structure
var pomodoro = {
  endDate: function() {
    return ((POMODORO_LENGTH).minutesAfter(this.startDate));
  },
  remaining: function() {
    return this.endDate().getTime() - Date.now();
  },
  done: function() {
    return this.remaining() < 0;
  }
};

// create mongo collection, extend it with the above new fields
Pomodoros = new Mongo.Collection("Pomodoros", {
  transform: function (doc) { return _.extend(Object.create(pomodoro), doc); }
});

// apply rights
var ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
};

// allow what/etc.
Pomodoros.allow({
  insert: ownsDocument,
  update: ownsDocument,
  remove: ownsDocument,
});

// can also .deny({...})
