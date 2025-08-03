Creando un servidor con Express
Node.js nos permite crear servidores HTTP de manera nativa, pero para aplicaciones más grandes y escalables, escribir todo el código manualmente puede volverse complejo. Aquí es donde entra Express.js, un framework minimalista para Node.js que simplifica la creación de servidores y APIs.

En esta lectura, aprenderemos qué es Express, cómo instalarlo y cómo crear un servidor básico con rutas y middlewares. Además, realizaremos un ejercicio práctico para entender su funcionamiento.

¿Qué es Express?
Express.js es un framework web para Node.js que facilita la gestión de rutas, solicitudes HTTP, middlewares y más. Entre sus ventajas destacan:

Simplicidad: Reduce la cantidad de código necesario para manejar solicitudes y respuestas.
Flexibilidad: Compatible con múltiples bibliotecas y bases de datos.
Rendimiento: Ligero y eficiente en comparación con otros frameworks más robustos.
Middleware: Permite agregar funcionalidades como autenticación y manejo de errores fácilmente.
Instalación de Express
Para instalar Express en un proyecto Node.js, sigue estos pasos:

1. Inicializar un proyecto Node.js (si no lo tienes ya creado):

npm init -y
2. Instalar Express:

npm install express
Comparación entre un servidor con y sin Express
Para entender la diferencia entre usar Express y un servidor nativo en Node.js, veamos una comparación entre ambas implementaciones:

Servidor sin Express (usando Node.js puro)
const http = require('http');
const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('¡Bienvenido a nuestro servidor con Node.js puro!');

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada');
    }
});

server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});
Servidor con Express
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('¡Bienvenido a nuestro servidor con Express!');
});

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
Diferencias clave
Cantidad de código: En Node.js puro, el código es más extenso y requiere más configuración manual. Express permite escribir menos código y hacerlo más legible.
Manejo de rutas: En Node.js puro, se manejan con condicionales y estructuras manuales. Express simplifica este proceso con app.get(), app.post(), etc.
Middlewares: Node.js puro requiere que se implementen manualmente. Express incluye middlewares listos para manejar JSON, archivos estáticos y más.
Manejo de errores: En Node.js puro, el control de errores es más manual. Express proporciona una estructura más eficiente para manejar errores.
Escalabilidad: Node.js puro puede volverse difícil de mantener a medida que el proyecto crece. Express facilita la organización y el crecimiento del código.
Usar Express simplifica enormemente la creación de servidores, reduciendo la cantidad de código y mejorando la organización del proyecto.

Creando un servidor básico con Express
Ahora, vamos a construir un servidor sencillo con Express que maneje distintas rutas.

Paso 1: Crear el archivo del servidor
Crea un archivo llamado server.js y escribe el siguiente código:

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
tapp.use(express.json());

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
    res.json({ mensaje: `Recibido: ${req.body.texto}` });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
Paso 2: Ejecutar el servidor
Abre una terminal y ejecuta:

node server.js
Si todo está correcto, verás el mensaje Servidor en ejecución en http://localhost:3000.

Paso 3: Probar las rutas
Ruta raíz (/): Visita http://localhost:3000/ en tu navegador y verás el mensaje ¡Bienvenido a nuestro servidor Express!.
Ruta con parámetro (/saludo/:nombre): Prueba http://localhost:3000/saludo/Juan y recibirás Hola, Juan!.
Ruta POST (/mensaje): Usa Postman o cURL para enviar un JSON:
curl -X POST http://localhost:3000/mensaje -H "Content-Type: application/json" -d '{"texto": "Hola, servidor!"}'
Devolverá:
{ "mensaje": "Recibido: Hola, servidor!" }

Casos de uso en el mundo real
Express es utilizado ampliamente en el desarrollo backend para:

APIs RESTful: Creación de servicios web consumidos por aplicaciones frontend y móviles.
Servidores de autenticación: Manejo de sesiones y autenticación con JWT o OAuth.
Integración con bases de datos: Conexión con MongoDB, PostgreSQL o MySQL.
Aplicaciones en tiempo real: Chats y dashboards con WebSockets o Socket.io.
Conclusión
Express simplifica enormemente la creación de servidores en Node.js, permitiendo manejar rutas, solicitudes y respuestas de forma rápida y eficiente. En esta lectura, aprendimos cómo instalarlo, crear un servidor y probar sus funcionalidades básicas. Con esta base, podemos extenderlo para proyectos más complejos y escalables.