import { DBUsers } from "./users"
import { connection } from '@/utils/database'

export async function gen_current_date(): Promise<string> {
  if (!connection) throw new Error('Database connection error');

  const { rows } = await new DBUsers().makeQuery('SELECT CURRENT_DATE;');
  return rows[0].current_date;
}