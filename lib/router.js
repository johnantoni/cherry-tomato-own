Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function () {
    return [
      Meteor.subscribe('self'),
      Meteor.subscribe('myPomodoros')
    ];
  }
});

Router.onBeforeAction('loading');

Router.route('/', function () {
  this.render('home');
}, {
  name: 'home',
  waitOn: function () {
    return [
      Meteor.subscribe('team'),
      Meteor.subscribe('followerPomodoros', (Meteor.user() ? Meteor.user().followers : null))
    ];
  }
});

Router.route('/users/find', function () {
  this.render('findUsers');
}, {
  name: 'findUsers'
});

Router.route('/:username', function () {
  this.render('profileFull');
}, {
  name: 'profile',
  waitOn: function () {
    return [
      Meteor.subscribe('singleUser', this.params.username),
      Meteor.subscribe('followerPomodoros', (Meteor.user() ? Meteor.user().followers : null))
    ];
  },
  data: function() {
    return Meteor.users.findOne({username: this.params.username});
  }
});
