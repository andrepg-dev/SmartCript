import { Pool } from 'pg';

let connection: Pool | undefined;

// No conectar a la base de datos si ya está conectado
if (!connection) {
  connection = new Pool({
    user: 'andre',
    password: 'andre',
    host: 'localhost',
    port: 5432,
    database: 'smartcript'
  })
}

export { connection }; // Exportar la conexión a la base de datos
