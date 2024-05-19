import { gen_random_uuid } from "@/services/database/gen_uuid";
import { DBUsers } from "@/services/database/users";
import { validations } from "@/services/database/validation";

// Cookies with JSON Web Tokens
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
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

  const userToCreate = {
    id: await gen_random_uuid(),
    fullName,
    email: comprimed_values.email,
    password: comprimed_values.password,
    avatar,
    avatarColor,
    payment_date: null,
    suscriptionId: 1,
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
/*
{
    "user": [
        {
            "user_id": "886c8fe7-654c-407c-9d07-f9b78c34f833",
            "fullname": "asd asdasd",
            "email": "asjdhajsdq@gmail.com",
            "avatar": "https://www.gravatar.com/avatar/",
            "avatar_color": "bg-blue-500",
            "password": "$2b$10$LgR8/Kz9yxzJVAFYZDM8fuGuL4h1XT6YZk41PErONMRs2RXFrCPSy",
            "created_at": "2024-05-15T06:00:00.000Z",
            "suscription_name": "FREE",
            "payment_date": null,
            "amount": 0
        }
    ],
    "exp": 1718428598,
    "iat": 1715836598
}
 */