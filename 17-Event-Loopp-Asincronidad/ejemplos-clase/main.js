/*¿Qué es el Event Loop?
El Event Loop es el mecanismo que permite a JavaScript realizar operaciones no bloqueantes a pesar de ser un lenguaje de programación de un solo hilo. Esto significa que aunque JavaScript solo puede ejecutar una tarea a la vez, puede manejar múltiples operaciones asincrónicas de manera eficiente al delegar ciertas tareas al navegador o al entorno de ejecución (como Node.js).*/

/*console.log('Inicio');

setTimeout(() => {
    console.log('Tarea asincrónica completada');
}, 2000);

console.log('Fin');*/

/*Asincronicidad en JavaScript
La asincronicidad se refiere a la capacidad de ejecutar tareas que pueden completarse en un futuro sin detener el flujo del programa principal. Esto es crucial en JavaScript para manejar eventos como clicks, peticiones HTTP y temporizadores. */
// Mecanismos comunes

//1. Callbacks: Son funciones que se pasan como argumento a otras funciones y se ejecutan después de que una tarea se completa.
// function saludar(nombre, callback) {
//     console.log(`Hola, ${nombre}`);
//     callback();
// }

// saludar('María', () => {
//     console.log('Callback ejecutado.');
// });

//2. Promises: Ofrecen una manera más limpia de manejar tareas asincrónicas. Una Promise puede estar en tres estados: pendiente, resuelta o rechazada.

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promesa cumplida'), 1000);
// });

// promesa.then(resultado => console.log(resultado));

//3. Async/Await: Introducido en ES8, permite escribir código asincrónico de manera que parezca sincrónico.
// async function obtenerDatos() {
//     const respuesta = await fetch('https://api.example.com/data');
//     const datos = await respuesta.json();
//     console.log(datos);
// }

// obtenerDatos();

//Casos de Uso en el Mundo Real
/*1. Interacciones con el usuario
Cuando un usuario interactúa con una página web (por ejemplo, hace clic en un botón), el Event Loop asegura que los eventos se manejen sin bloquear la interfaz.*/

// button.addEventListener('click', () => {

//     console.log('Botón presionado');

// });

/*2. Peticiones HTTP
Las aplicaciones web modernas realizan peticiones a servidores para obtener datos. Usar asincronicidad asegura que la aplicación no se congele mientras espera una respuesta.*/

// fetch('https://api.example.com/data')

//     .then(response => response.json())

//     .then(data => console.log(data));

/*3. Temporizadores
Los temporizadores como setTimeout o setInterval son ejemplos clásicos de asincronicidad.*/

// setTimeout(() => {

//     console.log('Esto se ejecuta después de 3 segundos');

// }, 3000);

/*4. Animaciones
El Event Loop permite que las animaciones en páginas web sean fluidas sin bloquear otras tareas importantes.*/

// let position = 0;

// function moverCaja() {
//     position += 1;
//     caja.style.left = position + 'px';

//     if (position < 100) {
//         requestAnimationFrame(moverCaja);
//     }
// }

// moverCaja();

/*¿Qué es la Comunicación Cliente-Servidor?
La comunicación cliente-servidor es un modelo donde un cliente (por ejemplo, un navegador web o una aplicación móvil) envía solicitudes a un servidor, y este responde con los datos o acciones solicitadas. Es el corazón de la web moderna y permite que aplicaciones distribuidas interactúen.*/

/*Código simplificado:
Servidor (Node.js con Express):*/

// const express = require('express');
// const app = express();

// app.get('/saludo', (req, res) => {
//     res.send('¡Hola desde el servidor!');
// });

// app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));

//Cliente (Fetch API en JavaScript):

// fetch('http://localhost:3000/saludo')

//     .then(response => response.text())

//     .then(data => console.log(data));
//Salida: ¡Hola desde el servidor!


/*HTTP: El Protocolo de la Web
HTTP (Hypertext Transfer Protocol) es el protocolo estándar para la comunicación en la web. Cada interacción entre cliente y servidor usa métodos HTTP como:

GET: Obtener datos del servidor.
POST: Enviar datos al servidor POST para crear (sobre todo) o actualizar un recurso.
PUT: Actualizar datos en el servidor.
DELETE: Eliminar datos del servidor.*/

/*Ejemplo:
Una solicitud GET se usa para obtener datos:

fetch('https://api.example.com/datos')

    .then(response => response.json())

    .then(data => console.log(data));*/