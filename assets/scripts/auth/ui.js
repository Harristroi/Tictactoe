
const store = require('./../store')

const onSignUpSuccess = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text('Sign up complete ' + response.user.email)
  $('#message').show()
}
const onSignUpFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign up failed')
  $('#message').show()
}
const onSignInSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Signed in ' + response.user.email)
  $('#message').show()
  $('.container').show()
  console.log(response)
  store.user = response.user
}
const onSignInFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text('Signed in failed')
  $('#message').show()
}
const onSignOutSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign Out Completed')
  $('#message').show()
}
const onSignOutFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign Out Not Completed')
  $('#message').show()
}
const onChangePasswordSuccess = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text('Password has been Changed')
  $('#message').show()
}
const onChangePasswordFailure = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text('Password change failed')
  $('#message').show()
}

const onCreateSuccess = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text('New game created')
  $('#message').show()
  $('#gameId').text('Game ID: ' + response.game._id)
  $('.square').show()
  store.game = response.game
}
const onCreateFailure = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text('New game failed')
  $('#message').show()
}
const onDeleteGameSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Deleted Game')
  $('#message').show()
}
const onDeleteGameFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text('Delete game failed')
  $('#message').show()
}
module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure,
  onSignOutSuccess: onSignOutSuccess,
  onSignOutFailure: onSignOutFailure,
  onChangePasswordSuccess: onChangePasswordSuccess,
  onChangePasswordFailure: onChangePasswordFailure,
  onCreateSuccess: onCreateSuccess,
  onCreateFailure: onCreateFailure,
  onDeleteGameSuccess,
  onDeleteGameFailure
}
