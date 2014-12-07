cherry-tomato
=============

#### commands

meteor bootcamp pomodoro app

    meteor add sanjo:jasmine
    meteor add velocity:html-reporter

run

    meteor

accounts

    meteor add accounts-ui
    meteor add accounts-password

security

    meteor remove insecure
    meteor remove autopublish

console

    meteor mongo

#### notes

offline support -> look at grounddb

generally you setup your publications to return all the data, as long as it's secure.

then filter it at the ui level.

lib folder is run before client & server, so can handle environment variables, etc.

#### functions

putting brackets at the end of a function causes it to be run then and there;

    .....
    }();

anonymous function:

    variable = function () {
      ....
    }

...available everywhere

    var variable = function () {
      ....
    }

...available locally

* see https://www.discovermeteor.com/blog/javascript-for-meteor/

##### notes

never need to use functions as myDate() in the template, just myDate, meteor will know.

#### variables

* var keyword only available inside that function
* if without var then available globally

#### further

* https://www.meteor.com/projects
