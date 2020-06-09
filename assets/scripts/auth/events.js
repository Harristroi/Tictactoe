const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(event)
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
    .then(ui.signInSuccess)
    .catch(ui.onSignInFailure)
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn
}
