import jwt from 'jsonwebtoken';

import { serialize } from 'cookie';

import { DBUsers } from '@/services/database/users';
import { validations } from '@/services/database/validation';
import { ComparePassword } from '@/utils/bcrypt_password';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body


  // Validations
  const [error, status] = validations(email, password);

  if (error) {
    if (status) {
      return Response.json(error, status);
    } else {
      return Response.json(error);
    }
  }

  const db = new DBUsers();
  const { rows } = await db.makeQuery('SELECT * FROM users WHERE email = $1', [email])
  const user = rows[0];

  if (!user) {
    return Response.json({ error: 'User not found' }, { status: 404 });
  }

  const comparePassword = await ComparePassword(password, user.password);

  if (!comparePassword) {
    return Response.json({ error: 'Password incorrect' }, { status: 400 });
  }

  // Almacenar usuario en la sesión con JWT
  const expirationDate = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30; // 30 days

  const token = jwt.sign({ ...user, exp: expirationDate }, process.env.JWT_SECRET as string);

  const cookieName = process.env.COOKIE_NAME as string;
  const serialized = serialize(cookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
  })

  // Enviar la cookie al servidor
  cookies().set(cookieName, serialized)

  return Response.json(null, { status: 200 })
}


