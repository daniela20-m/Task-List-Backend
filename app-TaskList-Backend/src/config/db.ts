import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Usuario de MySQL
  password: 'root12345678',  // Contraseña de MySQL
  database: 'task_db',  // Base de datos en este caso task_db
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL!');
});

export default db;
