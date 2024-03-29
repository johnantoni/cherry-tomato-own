describe('Templates', function () {
  describe('pomodorosList', function () {

    describe('when empty', function () {
      it("shows the empty message", function() {
        this.container = document.createElement("DIV");
        this.view = Blaze.renderWithData(Template.pomodorosList, {}, this.container);
        var $view = $(this.container).find(".pomodoro-list");

        expect($view).toHaveText("No completed Pomodoros yet");
      });
    });

    describe('when a pomodoro exists', function () {
      it("shows the pomodoro", function() {
        spyOn(Template.pomodorosList.__helpers, " completedPomodoros").and.callFake(function () {
          return [{
            startDate:  new Date(),
            goal:       "new goal",
            done:       function () { return false; },
            remaining:  function () { return 100000; },
          }];
        });

        this.container = document.createElement("DIV");
        this.view = Blaze.renderWithData(Template.pomodorosList, {}, this.container);
        var $view = $(this.container).find(".pomodoro-list");

        expect($view).toContainText("new goal");
      });
    });

  });
});
