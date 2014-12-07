Router.configure({
  layoutTemplate: 'layout',
  waitOn: function () {
    return [Meteor.subscribe('pomodoros')];
  }
});

Router.route('/', function () {
  this.render('pomodorosList');
}, {
  name: 'pomodorosList'
});

Router.route('/user/:username', function () {
  this.render('profile', {
    data: function () {
      return Meteor.users.findOne({username: this.params.username});
    }
  });
});

Router.route('/team', {
  subcriptions: function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    // return Meteor.subscribe('allUsers');
  },

  action: function () {
    if (this.ready()) {
      this.render('team');
    } else {
      this.render('Loading');
    }
  }
});
