import { extractValueOfCookieSerialized } from '@/utils/extractValueOfCookieSerialized';
import { serialize } from 'cookie';
import { verify } from 'jsonwebtoken';
import { cookies as CookieServer } from "next/headers";


export function POST() {
  const cookies = CookieServer().get(process.env.COOKIE_NAME as string);

  if (!cookies) {
    return Response.json({ error: 'No token provided' }, { status: 400 });
  }
  const { value } = cookies;
  const cookieValue = extractValueOfCookieSerialized(value)

  if (!cookieValue) return Response.json({ error: 'No cookie provided' }, { status: 400 });

  try {
    verify(cookieValue, process.env.JWT_SECRET as string);
    const cookieName = process.env.COOKIE_NAME as string;

    const serialized = serialize(cookieName, '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 0,
      path: '/',
    })

    CookieServer().set(cookieName, serialized);
    return Response.json('Logout successfully', { status: 200 });
  } catch (error) {
    return Response.json({ error: 'Invalid token' }, { status: 401 });
  }
}