import { DBUsers } from "./users"
import { connection } from '@/utils/database'

export async function gen_random_uuid(): Promise<string> {
  if (!connection) throw new Error('Database connection error');

  const { rows } = await new DBUsers().makeQuery('SELECT gen_random_uuid() AS uuid;');
  return rows[0].uuid;
}