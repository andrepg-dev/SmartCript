import { extractValueOfCookieSerialized } from '@/utils/extractValueOfCookieSerialized';
import { verify } from 'jsonwebtoken'
import { cookies as CookieServer } from "next/headers";

export async function GET() {
  // Verificar si el usuario está autenticado, y extraer los datos con JSON Web Token
  const cookies = CookieServer().get(process.env.COOKIE_NAME as string);

  if (!cookies) {
    return Response.json({ error: 'No token provided' }, { status: 401 });
  }

  const cookieValue = extractValueOfCookieSerialized(cookies.value);
  if (!cookieValue) return Response.json({ error: 'No cookie token provided' }, { status: 401 });

  try {
    const user = verify(cookieValue, process.env.JWT_SECRET as string);
    return Response.json(user);
  } catch (error) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

