import { gen_random_uuid } from "@/services/database/gen_uuid";
import { DBUsers } from "@/services/database/users";
import { validations } from "@/services/database/validation";

// Cookies with JSON Web Tokens
import { DBUserCreate } from "@/interfaces/db-user";
import { serialize } from 'cookie';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const body = await req.json();

  const { fullName, email, password, avatar, avatarColor } = body;

  const comprimed_values = {
    email: email.toLowerCase().trim(),
    password: password.trim()
  }

  const [error, status] = validations(comprimed_values.email, comprimed_values.password);

  if (error) {
    if (status) {
      return Response.json(error, status);
    } else {
      return Response.json(error);
    }
  }


  const db = new DBUsers();

  const { rows } = await db.makeQuery("SELECT * FROM users WHERE email = $1", [comprimed_values.email]);
  const userAlreadyExists = rows[0];

  if (userAlreadyExists) {
    return Response.json({ error: 'Email already exists' }, { status: 404 });
  }

  const userToCreate: DBUserCreate = {
    user_id: await gen_random_uuid(),
    fullname: fullName,
    email: comprimed_values.email,
    password: comprimed_values.password,
    avatar,
    avatar_color: avatarColor,
    payment_date: null,
    suscriptionId: 1,
    suscription_name: 'FREE',
    amount: 0
  }

  const user = await db.createUser(userToCreate);

  // Crear JWT para el usuario
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
  cookies().set(cookieName, serialized);

  return Response.json(null, { status: 200 })
}
