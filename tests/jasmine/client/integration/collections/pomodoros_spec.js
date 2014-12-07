describe('Collections', function () {
  describe('Pomodoros', function () {
    afterEach( function (done) {
      _.each(Pomodoros.find().fetch(), function (pomo) {
        Pomodoros.remove(pomo._id);
      });
      done();
    });

    it('creates a pomodoro', function (done) {
      var id = Pomodoros.insert({userId: '1', goal: "a goal"});

      var pomodoros = Pomodoros.find().fetch();
      expect(pomodoros.length).toBe(1);
      done();
    });

    it('endDate is 25 minutes after startDate', function (done) {
      var id = Pomodoros.insert({userId: '1', goal: "a goal", startDate: new Date()});

      var pomodoros = Pomodoros.find().fetch();
      var pom = pomodoros[0];

      expect(pom.endDate()).toEqual((25).minutesAfter(pom.startDate));
      expect(pomodoros.length).toBe(1);
      done();
    });

    it('knows when it is done', function () {
      var start = (26).minutesBefore(new Date());
      var id = Pomodoros.insert({userId: '1', goal: "a goal", startDate: start});

      var pomodoros = Pomodoros.find().fetch();
      var pom = pomodoros[0];

      expect(pom.done()).toBe(true);
      expect(pomodoros.length).toBe(1);
    });
  });
});
