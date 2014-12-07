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
