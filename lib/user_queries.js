userFields = {'username': 1, 'following': 1, 'followers': 1};

following = function (userId) {
  return Meteor.users.find({followers: {$all: [userId]}}, {fields: userFields});
};

followers = function (userId) {
  return Meteor.users.find({following: {$all: [userId]}}, {fields: userFields});
};

team = function (userId) {
  return Meteor.users.find(
    {$or: [
      {following: {$all: [userId]}},
      {followers: {$all: [userId]}}
    ]},
    {fields: userFields}
  );
};
