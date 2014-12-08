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
    return Meteor.subscribe("allUsers");
  },
  data: function() {
    Meteor.users.find();
  },

  action: function () {
    if (this.ready()) {
      this.render('team');
    } else {
      this.render('Loading');
    }
  }
});
