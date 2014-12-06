cherry-tomato
=============

#### commands

meteor bootcamp pomodoro app

    meteor add sanjo:jasmine
    meteor add velocity:html-reporter

accounts

    meteor add accounts-ui
    meteor add accounts-password

security

    meteor remove insecure
    meteor remove autopublish

console

    meteor mongo

#### notes

generally you setup your publications to return all the data, as long as it's secure.

then filter it at the ui level.

lib folder is run before client & server, so can handle environment variables, etc.
