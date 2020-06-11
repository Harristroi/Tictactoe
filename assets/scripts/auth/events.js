const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
let turn = true

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(event)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(event)
  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(event)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onClick = function (event) {
  const index = event.target.dataset.cellIndex
  const player = turn ? 'X' : 'O'
  const data = {
    number: index,
    letter: player,
    place: false
  }
  if (turn) {
    event.target.innerHTML = 'X'
    turn = false
  } else {
    event.target.innerHTML = 'O'
    turn = true
  }
  $('#message').text(`It is ${player} turn.`)
  $('#message').show()
  api.updateGame(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onStartNewGame = function (event) {
  event.preventDefault()
  // v Making an API call
  api.createGame()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onDeleteGame = function (event) {
  event.preventDefault()
  api.deleteGame()
    .then(ui.onDeleteGameSuccess)
    .catch(ui.onDeleteGameFailure)
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onSignOut: onSignOut,
  onChangePassword: onChangePassword,
  onClick: onClick,
  onStartNewGame,
  onDeleteGame
}
