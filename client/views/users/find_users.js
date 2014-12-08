var searchText = new Tracker.Dependency();

Template.findUsers.helpers({
  results: function () {
    searchText.depend();
    var text = $('#username-search').val();
    if (text) {
      text = text.replace(/[^\w\d]*/, '');
    }
    if (!text) {
      return null;
    }
    var regex = new RegExp(text, 'i');
    return Meteor.users.find({$and: [{username: regex}, {_id: {$ne: Meteor.userId()}}]}, {fields: userFields});
  }
});

Template.findUsers.events({
  'keyup #username-search' : function (e) {
    var username = $(e.target).val();
    searchText.changed();
    Meteor.subscribe('findUsers', username);
  },

  'submit #find-users' : function (e) {
    e.preventDefault();
    return false;
  }
});
