describe('Tasks', function () {
  describe('deleting a pomodoro', function () {
    beforeEach(waitForRouter);

    beforeEach(function (done) {
      var userData = {
        email: "davey@example.com",
        password: "password",
        profile: {name: "davey"}
      };

      Accounts.createUser(userData, function () {
        Meteor.loginWithPassword("davey@example.com", "password", function () {
          Tracker.flush();
          done();
        });
      });
    });

    beforeEach(function (done) {
      var start = (26).minutesBefore(new Date());
      var id = Pomodoros.insert({userId: Meteor.userId(), goal: "A completed task", startDate: start});

      Tracker.flush();
      done();
    });

    afterEach(function (done) {
      _.each(Pomodoros.find().fetch(), function(pomodoro) {
        Pomodoros.remove(pomodoro._id);
      });
      done();
    });

    afterEach(function (done) {
      Meteor.logout( function () {
        done();
      });
    });

    // TODO fix this test, temporarily marked as pending
    xit('deletes it from the completed section', function (done) {
      var pomodoroList = $(".pomodoro-list").text();
      expect( pomodoroList ).toContain("A completed task");

      $(".pomodoro-list").find('input.delete').click();
      Tracker.flush();

      var updatedList = $(".pomodoro-list").text();
      expect( updatedList ).not.toContain("A completed task");
      done();
    });
  });
});
