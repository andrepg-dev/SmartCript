export function EmailValidation(email: string): boolean {
  if (email.length > 255) return false

  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(regex)) return true
  return false
}

export function PasswordValidation(password: string): boolean {
  if (password.length < 8) return false
  return true
}

export function validations(email: string, password: string) {
  // Validations
  if (!email || !password) return [{ error: 'Email and password are required' }, { status: 400 }];

  // Email validation
  const regex = EmailValidation(email);
  if (!regex) return [{ error: 'Invalid email' }, { status: 400 }];

  // Password validation
  const pass = PasswordValidation(password);
  if (!pass) return [{ error: 'Password length invalid' }, { status: 400 }];

  if (password.includes(email)) return [{ error: 'Password cannot contain email' }, { status: 400 }];

  return [null, { status: 200 }];
}

export function validationsForm(email: string, password: string): string | null {
  // Validations
  if (!email || !password || email === '' || password === '') return 'Email and password are required'

  // Email validation
  const regex = EmailValidation(email);
  if (!regex) return 'Invalid email'

  // Password validation
  const pass = PasswordValidation(password);
  if (!pass) return 'Password length invalid'

  if (password.length > 255) return 'Password length exceded'

  if (password.includes(email)) return 'Password cannot contain email'

  return null;
}