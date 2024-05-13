import { verify } from 'jsonwebtoken'
import { cookies as CookieServer } from "next/headers";

export async function POST() {
  // Verificar si el usuario está autenticado, y extraer los datos con JSON Web Token
  const cookies = CookieServer().get(process.env.COOKIE_NAME as string);

  if (!cookies || !cookies.value) {
    return Response.json({ error: 'No token provided' }, { status: 401 });
  }

  const { value } = cookies;
  const cookieValue = extractValueOfCookieSerialized(value);

  try {
    const user = verify(cookieValue, process.env.JWT_SECRET as string);
    return Response.json(user);
  } catch (error) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export function extractValueOfCookieSerialized(cookie: string): string {
  return cookie.split(';')[0].split('=')[1];
}