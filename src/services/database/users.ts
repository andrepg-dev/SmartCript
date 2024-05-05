import { DBUser } from "@/interfaces/db-user";
import { DBUser as IDBusers } from '@/interfaces/db-user'
import { connection } from "@/utils/database";

export class DBUsers {

  public async makeQuery(query: string, params?: any[]) {
    if (!connection) throw new Error('Database connection error');
    return connection.query(query, params);
  }

  public async getUsers(): Promise<IDBusers[]> {
    const { rows } = await this.makeQuery('SELECT * FROM users;') as { rows: IDBusers[] };
    return rows;
  }

  public async getUserById(id: number) {
    const { rows } = await this.makeQuery('SELECT * FROM users WHERE id = $1', [id])
    return rows;
  }

  public async createUser({ id, fullName, email, password, suscriptionId, avatar }: DBUser) {
    const { rows } =
      await this.makeQuery('INSERT INTO users (id, fullName, email, password, suscription_id, avatar) VALUES ($1, $2, $3, $4, $5, $6)',
        [id, fullName, email, password, suscriptionId, avatar]);
    return rows;
  }
}