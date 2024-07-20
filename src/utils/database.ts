import { Pool } from 'pg';

const connection = new Pool({
  connectionString: process.env.PGDB_CONNECTION_STRING,
});

export { connection };
