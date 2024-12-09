require('dotenv').config(); // Cargar las variables de entorno

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Obtener el puerto desde el archivo .env o usar 3001 como predeterminado
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());            // Permite solicitudes de otros dominios
app.use(bodyParser.json()); // Para analizar las solicitudes con formato JSON

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('¡El servidor está corriendo correctamente!');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
