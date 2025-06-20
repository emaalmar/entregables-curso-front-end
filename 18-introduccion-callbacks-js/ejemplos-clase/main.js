// PARA INICIAR EL "package.json" DE ESTE EJERCICIO, EJECUTAR EL COMANDO "npm init -y" EN LA TERMINAL

/*Qué es un Callback?
Un callback es una función que se pasa como argumento a otra función y que se ejecuta después de que esa función principal haya terminado. Los callbacks permiten manejar tareas que no se completan de inmediato, como operaciones de lectura de archivos, solicitudes de red o temporizadores.*/
function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}!`);
    callback();
}

function despedirse() {
    console.log('Adios!');
}

saludar('María', despedirse);

// Salida:

// Hola, María!

// Adios!

/*Callbacks Asíncronos
En JavaScript, muchas operaciones son asincrónicas, como leer datos de un servidor o esperar un intervalo de tiempo. Los callbacks son esenciales para manejar estos escenarios y asegurarse de que el código no se detenga mientras espera*/

console.log('Inicio');

setTimeout(() => {

    console.log('Esto sucede después de 2 segundos');

}, 2000);

console.log('Fin');

// Salida:

// Inicio

// Fin

/*Anidación de Callbacks y el "Callback Hell"
Cuando se necesita realizar varias tareas asincrónicas en secuencia, los callbacks pueden llevar a un código difícil de leer y mantener, conocido como "callback hell".*/
setTimeout(() => {

    console.log('Primera tarea completada');

    setTimeout(() => {

        console.log('Segunda tarea completada');

        setTimeout(() => {

            console.log('Tercera tarea completada');

        }, 1000);

    }, 1000);

}, 1000);

//Casos Mundo Real

//1. Lectura de Archivos
// Cuando trabajas con datos almacenados en archivos, como leer un archivo JSON:

/*const fs = require('fs');

fs.readFile('datos.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    console.log('Datos del archivo:', data);
});*/

/*2. Solicitudes HTTP
Al obtener datos de una API, puedes usar callbacks para manejar las respuestas:

const https = require('https');

https.get('https://api.example.com/datos', (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Datos recibidos:', data);
    });
}).on('error', (err) => {
    console.error('Error en la solicitud:', err);
});*/


/*3. Animaciones en Interfaces de Usuario
En desarrollo web, los callbacks son útiles para manejar eventos como clics de usuario:

button.addEventListener('click', () => {

    console.log('Botón clicado!');

});*/

//---------------------------------------------------

/*¿Qué es JSON?
JSON (JavaScript Object Notation) es un formato de intercambio de datos basado en texto. Está estructurado de manera similar a un objeto de JavaScript, lo que hace que sea muy fácil de usar en aplicaciones que trabajen con JavaScript. Los datos en JSON se representan en pares de "clave-valor" (key-value), lo que lo hace ideal para almacenar información de manera organizada y jerárquica. Los valores pueden ser cadenas de texto, números, booleanos, objetos o incluso listas (arreglos).

Un objeto en JSON se representa con llaves {}, y las propiedades dentro del objeto se separan por comas. Los valores de las propiedades deben ir acompañados de comillas dobles " si son cadenas de texto.*/

/*Ejemplo de un objeto JSON:
{

    "nombre": "Carlos",

    "edad": 25,

    "esEstudiante": true,

    "materias": ["Matemáticas", "Física", "Programación"]

}*/

/*Convertir JSON a un objeto de JavaScript
Aunque JSON es un formato independiente, en JavaScript podemos convertir una cadena JSON a un objeto de JavaScript usando la función JSON.parse(). Esto es necesario cuando recibimos datos en formato JSON, como desde una API o un archivo, y queremos trabajar con esos datos dentro de nuestro código JavaScript.*/
const jsonData = '{"nombre": "Carlos", "edad": 25, "esEstudiante": true}';

const objeto = JSON.parse(jsonData);

console.log(objeto.nombre); // "Carlos"

console.log(objeto.edad);   // 25

/*Convertir un objeto de JavaScript a JSON
Por otro lado, si tenemos un objeto de JavaScript y necesitamos enviarlo o guardarlo en formato JSON, podemos convertirlo utilizando JSON.stringify(). Este proceso es útil cuando queremos almacenar datos en formato JSON o enviarlos a través de una red, por ejemplo, cuando hacemos una solicitud HTTP a una API*/
//Ejemplo de conversión a JSON:
const estudiante = {

    nombre: "Ana",

    edad: 22,

    esEstudiante: true,

    materias: ["Historia", "Inglés", "Literatura"]

};

const jsonString = JSON.stringify(estudiante);

console.log(jsonString);

/*JSON con Arreglos
En JSON, un arreglo es una lista ordenada de valores. Los valores en un arreglo pueden ser de cualquier tipo: cadenas, números, objetos, otros arreglos, etc. Los arreglos en JSON están representados con corchetes [], y los elementos dentro del arreglo se separan por comas.

Ejemplo de un arreglo en JSON:
{

    "estudiantes": [

    { "nombre": "Carlos", "edad": 25 },

    { "nombre": "Ana", "edad": 22 },

    { "nombre": "Luis", "edad": 23 }

    ]

}*/

//Convertir un arreglo JSON a objeto en JavaScript:
const jsonData2 = '{"estudiantes":[{"nombre":"Carlos","edad":25},{"nombre":"Ana","edad":22},{"nombre":"Luis","edad":23}]}';

const data = JSON.parse(jsonData2);

console.log(data.estudiantes[0].nombre);  // "Carlos"

console.log(data.estudiantes[2].edad);    // 22

/*JSON con Objetos Anidados
En JSON, los objetos pueden contener otros objetos dentro de ellos. Esto permite crear estructuras de datos más complejas y jerárquicas. Es común usar objetos anidados para representar información más detallada o relacionada entre sí.*/

/*//Ejemplo de objeto JSON con objetos anidados:
{

    "empresa": {

        "nombre": "Tech Solutions",

            "ubicacion": "Madrid",

                "empleados": [

                    { "nombre": "Carlos", "cargo": "Desarrollador", "edad": 30 },

                    { "nombre": "Ana", "cargo": "Diseñadora", "edad": 28 }

                ]

    }

}*/

//Convertir objeto JSON con objetos anidados a objeto en JavaScript:
const jsonData3 = '{"empresa":{"nombre":"Tech Solutions","ubicacion":"Madrid","empleados":[{"nombre":"Carlos","cargo":"Desarrollador","edad":30},{"nombre":"Ana","cargo":"Diseñadora","edad":28}]}}';

const data1 = JSON.parse(jsonData3);

console.log(data1.empresa.nombre);       // "Tech Solutions"

console.log(data1.empresa.empleados[1].cargo); // "Desarrollador"

/*Manejo de Datos con JSON: Casos de Uso
1. Intercambio de Datos con APIs
Uno de los usos más comunes de JSON es en el intercambio de datos entre aplicaciones web y servidores. Cuando una aplicación web hace una solicitud a un servidor, este suele responder con datos en formato JSON. De esta manera, podemos obtener información de manera estructurada y procesarla en el frontend (en el navegador) usando JavaScript.

Ejemplo de obtener datos de una API en formato JSON:
fetch('https://api.example.com/usuarios')

    .then(response => response.json())

    .then(data => {

    console.log(data);

    })

.catch(error => console.error('Error:', error));
En este ejemplo, fetch realiza una solicitud a la API y espera una respuesta en formato JSON. Luego, response.json() convierte la respuesta en una estructura de datos de JavaScript para que podamos trabajar con ella.

2. Guardar Datos Localmente
JSON también es útil para almacenar datos localmente en el navegador, por ejemplo, en el localStorage o en archivos. Si tenemos información que necesitamos conservar entre sesiones, podemos convertir un objeto de JavaScript en una cadena JSON y almacenarlo.

Ejemplo de guardar y recuperar datos con localStorage:
// Guardar datos en localStorage

const usuario = {

    nombre: "Lucía",

    edad: 30

};

localStorage.setItem('usuario', JSON.stringify(usuario));

// Recuperar datos de localStorage

const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

console.log(usuarioGuardado.nombre); // "Lucía"
En este caso, usamos localStorage.setItem para almacenar el objeto usuario como una cadena JSON. Luego, recuperamos la cadena con localStorage.getItem y la convertimos nuevamente a un objeto con JSON.parse().

3. Configuración de Aplicaciones
Otro uso frecuente de JSON es en la configuración de aplicaciones. Muchas aplicaciones almacenan sus configuraciones en archivos JSON, ya que es un formato fácil de leer y modificar. Por ejemplo, si estamos desarrollando un juego o una aplicación, podemos tener un archivo JSON que contenga las configuraciones del juego, como la dificultad, los niveles y otros parámetros.

Ejemplo de archivo JSON de configuración:
{

    "nivel": 2,

    "sonido": true,

    "velocidad": 5

}
Este archivo JSON podría ser cargado por la aplicación para configurar su comportamiento, como la velocidad del juego o si el sonido está activado.