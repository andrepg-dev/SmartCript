export function extractValueOfCookieSerialized(cookie: string): string {
  return cookie.split(';')[0].split('=')[1];
}