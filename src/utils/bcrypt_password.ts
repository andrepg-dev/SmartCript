import bcrypt from 'bcrypt';

export function HashPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const saltRounds = 10;
    const myPlaintTextPassword = password;

    bcrypt.hash(myPlaintTextPassword, saltRounds).then(resolve).catch(reject)
  })
}

export function ComparePassword(password: string, hash: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash).then(resolve).catch(reject)
  })
}