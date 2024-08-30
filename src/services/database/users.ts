import { DBUser, DBUserCreate } from "@/interfaces/db-user";
import { DBUser as IDBusers } from '@/interfaces/db-user'
import { HashPassword } from "@/utils/bcrypt_password";
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
    const { rows } = await this.makeQuery('SELECT users.id as user_id, fullname, email, avatar, avatar_color, password, created_at, suscription_name, payment_date, suscriptions.id as suscription_id, amount FROM users INNER JOIN suscriptions ON users.suscription_id = suscriptions.id;') as { rows: IDBusers[] };
    return rows;
  }

  public async getUserById(id: string) {
    const { rows } = await this.makeQuery('SELECT users.id as user_id, fullname, email, avatar, avatar_color, password, created_at, suscription_name, payment_date, suscriptions.id as suscription_id, amount FROM users INNER JOIN suscriptions ON users.suscription_id = suscriptions.id WHERE users.id = $1', [id])
    return rows[0];
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

  public async createUser({ user_id, fullname, email, password, suscriptionId = 1, avatar, avatar_color, payment_date = null }: DBUserCreate): Promise<DBUserCreate[]> {
    return new Promise(async (resolve, reject) => {
      try {
        // Hash the password
        const hashed_password = await HashPassword(password);

        // Insert data into the database with the hashed password
        await this.makeQuery('INSERT INTO users (id, fullname, email, password, suscription_id, avatar, avatar_color, payment_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
          [user_id, fullname, email, hashed_password, suscriptionId, avatar, avatar_color, payment_date]);

        // Select the user from the database
        const user = await this.getUserById(user_id);
        resolve(user);
      } catch (error) {
        reject(error)
      }
    })
  }
}


// REGISTER:
// {
//   "user_id": "22c509cd-6994-40f9-b2a2-18672c906ebb",
//   "fullname": "Andre Ponce",
//   "email": "nuevo@gmail.com",
//   "avatar": "/avatars/1.png",
//   "avatar_color": "bg-blue-500",
//   "password": "$2b$10$vHz4Ycweud7bsxlq.celY.pNOutOi9Emm4AGoS9KqvS.X6goi8n9S",
//   "created_at": "2024-05-17T06:00:00.000Z",
//   "suscription_name": "FREE",
//   "payment_date": null,
//   "suscription_id": 1,
//   "amount": 0,
//   "exp": 1718598366,
//   "iat": 1716006366
// }


// LOG IN:
// {
//   "id": "22c509cd-6994-40f9-b2a2-18672c906ebb",
//   "fullname": "Andre Ponce",
//   "email": "nuevo@gmail.com",
//   "avatar": "/avatars/1.png",
//   "avatar_color": "bg-blue-500",
//   "password": "$2b$10$vHz4Ycweud7bsxlq.celY.pNOutOi9Emm4AGoS9KqvS.X6goi8n9S",
//   "suscription_id": 1,
//   "payment_date": null,
//   "created_at": "2024-05-17T06:00:00.000Z",
//   "exp": 1718598384,
//   "iat": 1716006384
// }