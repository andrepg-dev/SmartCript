
import { connection } from '@/utils/database'
import { DBUsers } from '@/services/database/users'
import { DBUser as IDBusers, UserSuscription } from '@/interfaces/db-user'
import { gen_random_uuid } from '@/services/database/gen_uuid';
import { gen_current_date } from '@/services/database/gen_current_date';

/**
-- DROP TABLE IF EXISTS USERS;

-- CREATE TABLE USERS(
-- 	ID UUID NOT NULL PRIMARY KEY,
-- 	FULLNAME VARCHAR(450) NOT NULL,
-- 	EMAIL VARCHAR(255) NOT NULL UNIQUE,
-- 	PASSWORD VARCHAR(255),
-- 	SUSCRIPTION_ID VARCHAR(50),
-- 	AVATAR VARCHAR(255) DEFAULT 'https://avatar.png',
-- 	CREATED_AT DATE DEFAULT CURRENT_DATE
-- );

    SELECT * FROM USERS;

-- SELECT gen_random_uuid() AS uuid 
   */

export async function GET(): Promise<Response> {
  // Sino hay conexión a la base de datos retornar un error
  if (!connection) return Response.json({ message: 'Database connection error' }, { status: 500 })

  const uuid = await gen_random_uuid();

  const newUser: IDBusers = {
    id: uuid,
    fullName: 'Andre Sebastian Ponce Garcia',
    email: 'buenas@gmail.com',
    avatar: 'https://avatar.png',
    password: '$writting an strong password_',
    suscriptionId: UserSuscription.PREMIUM,
    avatarColor: 'bg-blue-300',
    payment_date: await gen_current_date()
  }

  await new DBUsers().createUser(newUser).catch(err => console.log('usuario duplicado'));

  // Esperar 3 segundos para que se cree el usuario
  newUser.id = await gen_random_uuid();
  newUser.email = 'otroemail@gmail.com'
  newUser.payment_date = null;
  newUser.suscriptionId = UserSuscription.FREE;
  newUser.payment_date = '2021-10-10';

  await new DBUsers().createUser(newUser).catch(err => console.log('usuario duplicado'));

  // Obtener todos los usuarios
  const users = await new DBUsers().getUsers();

  return Response.json(users) // Verificar si el servidor está funcionando
} 