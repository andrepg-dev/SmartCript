import { DBUser } from "@/interfaces/db-user";
import { DBUser as IDBusers } from '@/interfaces/db-user'
import { connection } from "@/utils/database";
import { QueryResult } from "pg";

export class DBUsers {

  public async makeQuery(query: string, params?: any[]): Promise<QueryResult> {
    return new Promise((resolve, reject) => {
      if (!connection) throw new Error('Database connection error');

      try {
        resolve(connection.query(query, params));
      } catch (error) {
        reject(error);
      }
    })
  }

  public async getUsers(): Promise<IDBusers[]> {
    const { rows } = await this.makeQuery('SELECT * FROM users;') as { rows: IDBusers[] };
    return rows;
  }

  public async getUserById(id: number) {
    const { rows } = await this.makeQuery('SELECT * FROM users WHERE id = $1', [id])
    return rows;
  }

  /*
    id uuid not null UNIQUE DEFAULT gen_random_uuid() PRIMARY KEY,
    fullname varchar(450) not null,
    email varchar(255) not null UNIQUE,
    avatar varchar(355) DEFAULT 'https://smartcript.com/avatars/7.png',
    avatar_color varchar(40) DEFAULT 'bg-blue-200',
    password varchar(255) NOT NULL,
    suscription_id INT NOT NULL DEFAULT 1,
    created_at date DEFAULT CURRENT_DATE
  */

  public async createUser({ id, fullName, email, password, suscriptionId, avatar, avatarColor }: DBUser): Promise<IDBusers[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const { rows } =
          await this.makeQuery('INSERT INTO users (id, fullname, email, password, suscription_id, avatar, avatar_color) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [id, fullName, email, password, suscriptionId, avatar, avatarColor]);
        resolve(rows);
      } catch (error) {
        reject(error)
      }
    })
  }
}