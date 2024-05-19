export interface FormError {
  emailAndPasswordRequired?: boolean
  emailInvalid?: boolean
  passwordInvalid?: boolean
  passwordContainsEmail?: boolean
  passwordLengthExceded?: boolean
  emailNotFound?: boolean
  passwordIncorrect?: boolean
}

export interface IFormRegisterError {
  emailAndPasswordRequired?: boolean
  emailAlreadyExists?: boolean
  passwordInvalid?: boolean
  passwordContainsEmail?: boolean
  passwordLengthExceded?: boolean
  emailInvalid?: boolean
}