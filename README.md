cherry-tomato
=============

#### commands

meteor bootcamp pomodoro app

    meteor add sanjo:jasmine
    meteor add velocity:html-reporter

run

    meteor

reset db

    meteor reset

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

can use many functions of mongodb inside mini-mongo.

plus mongo has native support for lat/lng for geolocation calculations.

generally you setup your publications to return all the data, as long as it's secure.

then filter it at the ui level.

lib folder is run before client & server, so can handle environment variables, etc.

functions will be filtered out of being saved to the database.


// sugar methods (to be ported to moment)
// .toString
// .floor


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

never need to use functions as myDate() in the template, just myDate, meteor will know.

#### variables

* var keyword only available inside that function
* if without var then available globally

#### further

* http://docs.meteor.com/#/full/reactivevar
* http://docs.meteor.com/#/full/tracker
* ejson.js - extended json, you can also store this inside the database http://docs.meteor.com/#/full/ejson
* https://www.meteor.com/projects
