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
  this.render('user', {
    data: function () {
      return Meteor.users.findOne({username: this.params.username});
    }
  });

  // this.render('user');
  // this.subscribe('user', this.params._id).wait();

  // if (this.ready()) {
  //   this.render();
  // } else {
  //   this.render('Loading');
  // }
});
