const passwordComplexity = require('joi-password-complexity')
import settings from '../config/projectSettings'

export async function verifyPassword(pwd: string) {
  let result: any = passwordComplexity(
    settings.passwordPolicy,
    settings.passwordLabel,
  ).validate(pwd)
  let message: string = ''
  if (result.error) {
    result.error.details.forEach(detail => {
      message += detail.message + '\n'
    })
    result.isValid = false
    result.errorMessage = message
    return result
  } else {
    result.isValid = true
    return result
  }
}
