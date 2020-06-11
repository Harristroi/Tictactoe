'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
// ^ Declares a variable that will require the events.js file from inside the auth folder
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('.square').on('click', authEvents.onClick)
  $('#startnewgame').on('submit', authEvents.onStartNewGame)
  $('#deletegame').on('submit', authEvents.onDeleteGame)
})
