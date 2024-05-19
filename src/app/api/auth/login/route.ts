import jwt from 'jsonwebtoken';

import { serialize } from 'cookie';

import { DBUsers } from '@/services/database/users';
import { validations } from '@/services/database/validation';
import { ComparePassword } from '@/utils/bcrypt_password';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body

  console.log({ email, password });

  const comprimed_values = {
    email: email.toLowerCase().trim(),
    password: password.trim()
  }

  // Validations
  const [error, status] = validations(comprimed_values.email, comprimed_values.password);

  if (error) {
    if (status) {
      return Response.json(error, status);
    } else {
      return Response.json(error);
    }
  }

  const db = new DBUsers();
  const { rows } = await db.makeQuery('SELECT users.id as user_id, fullname, email, avatar, avatar_color, password, created_at, suscription_name, payment_date, suscriptions.id as suscription_id, amount FROM users INNER JOIN suscriptions ON users.suscription_id = suscriptions.id WHERE users.email = $1', [comprimed_values.email])
  const user = rows[0];

  if (!user) {
    return Response.json({ error: 'Email not found' }, { status: 404 });
  }

  const comparePassword = await ComparePassword(password, user.password);

  if (!comparePassword) {
    return Response.json({ error: 'Password incorrect' }, { status: 401 });
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


