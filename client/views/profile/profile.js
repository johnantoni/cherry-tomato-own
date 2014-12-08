var profileHelpers = {
  currentPomodoro: function () {
    return currentPomodoro(this);
  },
  followingUser: function () {
    if (!Meteor.user() || !Meteor.user().following) {
      return false;
    }
    return Meteor.user().following.indexOf(this._id) >= 0;
  },
  followerUser: function () {
    if (!Meteor.user() || !Meteor.user().followers) {
      return false;
    }
    return Meteor.user().followers.indexOf(this._id) >= 0;
  }
};

var profileEvents = {
  'click .follow' : function (e) {
    Meteor.call('follow', this._id, function(error, result) {
      if (error) {
        return alert(error.reason);
      }
      console.log("follow method returned", result);
    });

  },
  'click .unfollow' : function (e) {
    Meteor.call('unFollow', this._id, function(error, result) {
      if (error) {
        return alert(error.reason);
      }
      console.log("unFollow method returned", result);
    });
  }
};

Template.profileFull.helpers(profileHelpers);
Template.profileListItem.helpers(profileHelpers);

Template.profileFull.events(profileEvents);
Template.profileListItem.events(profileEvents);
