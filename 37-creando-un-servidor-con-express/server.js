const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta de inicio
app.get('/', (req, res) => {
    res.send('¡Bienvenido a nuestro servidor Express!');
});

// Ruta con parámetros dinámicos
app.get('/saludo/:nombre', (req, res) => {
    res.send(`Hola, ${req.params.nombre}!`);
});

// Ruta POST para recibir datos

app.post('/mensaje', (req, res) => {
    res.json({ 
        mensaje: `Recibido: ${req.body.mensaje}`,
        estado: ` El estado actual es: ${req.body.estado}`
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});