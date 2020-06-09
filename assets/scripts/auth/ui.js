
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
  $('#play-game').show()
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
  $('form').trigger('reset')
  $('#message').text('Password has been Changed')
  $('#message').show()
}
const onChangePasswordFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text('Password change failed')
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
  onChangePasswordFailure: onChangePasswordFailure
}
