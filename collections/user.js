Meteor.methods({
  follow: function (otherUserId) {
    if (!this.userId) {
      throw new Meteor.Error(401, "Not signed in");
    }

    if (!Meteor.users.findOne({_id: otherUserId})) {
      throw new Meteor.Error(404, "Couldn't find user with id " + otherUserId);
    }

    Meteor.users.update({_id: this.userId}, {$addToSet: {following: otherUserId}});
    Meteor.users.update({_id: otherUserId}, {$addToSet: {followers: this.userId}});

    return true;
  },

  unFollow: function (otherUserId) {
    if (!this.userId) {
      throw new Meteor.Error(401, "Not signed in");
    }

    if (!Meteor.users.findOne({_id: otherUserId})) {
      throw new Meteor.Error(404, "Couldn't find user with id " + otherUserId);
    }

    Meteor.users.update({_id: this.userId}, {$pull: {following: otherUserId}});
    Meteor.users.update({_id: otherUserId}, {$pull: {followers: this.userId}});

    return true;
  }
});
