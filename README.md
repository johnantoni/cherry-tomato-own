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

#### further

* https://www.meteor.com/projects
