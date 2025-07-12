/* Introducción a node.js y npm
¿Qué es Node.js?
Node.js es un entorno de ejecución de JavaScript que permite ejecutar código en el servidor. A diferencia del código JavaScript tradicional que se ejecuta en el navegador, Node.js permite crear aplicaciones independientes sin depender de un navegador web.

Node.js fue creado en 2009 por Ryan Dahl y está basado en el motor V8 de Google Chrome, lo que lo hace rápido y eficiente. Además, usa un modelo de E/S no bloqueante y orientado a eventos, lo que lo hace ideal para aplicaciones escalables.

Instalación de Node.js
Para comenzar a usar Node.js, es necesario instalarlo desde su sitio oficial: https://nodejs.org. Una vez instalado, podemos verificar la versión con el siguiente comando en la terminal: */

// node -v

/* ¿Qué es npm?
Npm (Node Package Manager) es el gestor de paquetes de Node.js. Permite instalar, compartir y gestionar paquetes (bibliotecas y herramientas) que facilitan el desarrollo de aplicaciones.

Archivo package.json
El archivo package.json es un archivo clave en proyectos de Node.js, ya que contiene la información del proyecto, dependencias y configuraciones. Para crear uno, ejecutamos: */

// npm init -y

// Esto generará un archivo package.json con una configuración básica. Un ejemplo de este archivo podría verse así:

/* {
    "name": "mi-proyecto",
        "version": "1.0.0",
            "description": "Un proyecto con Node.js",
                "main": "index.js",
                    "scripts": {
        "start": "node index.js"
    },
    "dependencies": {
        "express": "^4.17.1"
    }
} */

// Este archivo facilita la instalación de todas las dependencias de un proyecto con el comando:

// npm install

/* Instalación de paquetes con npm
Un paquete es un conjunto de archivos de código reutilizables que pueden ser instalados en un proyecto.Para instalar un paquete con npm, utilizamos: */

// npm install nombre - del - paquete

/* Por ejemplo, para instalar la biblioteca express(un framework para crear servidores en Node.js):*/

// npm install express

/* Este comando descarga e instala el paquete express, que es un framework para construir aplicaciones web con Node.js. */

/* Para instalar un paquete de manera global, se agrega la opción - g: */

// npm install - g nodemon

/* Esto instalará nodemon, una herramienta que reinicia automáticamente el servidor cada vez que hay cambios en el código.*/

/* Gestión de paquetes con npm
Instalación de dependencias de desarrollo y producción
npm permite la instalación de dependencias para distintos propósitos.Hay dos tipos principales:

Dependencias de producción: Son aquellas necesarias para que la aplicación funcione en producción. */

// npm install express
/* Este comando instala express como una dependencia de producción y lo registra en dependencies dentro de package.json. */

/* Dependencias de desarrollo: Son herramientas útiles para el desarrollo, pero no necesarias en producción. */

// npm install--save - dev nodemon
/* Esto instala nodemon y lo registra en devDependencies dentro de package.json. */

/* Nomenclatura de versiones en package.json
Cada paquete en package.json tiene un número de versión que sigue la convención SemVer(Versionado Semántico): MAJOR.MINOR.PATCH. */

    // Ejemplo: ^ 4.17.1 en express significa:

/* 4 → Cambios mayores(puede haber cambios incompatibles con versiones anteriores).
17 → Nuevas funciones añadidas, pero sigue siendo compatible con la versión mayor.
1 → Correcciones de errores menores sin cambiar la funcionalidad. */

/* Símbolos comunes en versiones:

^ 4.17.1 → Permite actualizaciones menores y parches(4.x.x).
~4.17.1 → Permite solo actualizaciones de parches(4.17.x).
4.17.1 → Instala solo esa versión exacta. */

/* Uso de scripts en package.json
El archivo package.json permite definir comandos personalizados dentro de la sección scripts.Estos scripts pueden ejecutarse con npm run nombre - del - script. */

/* Ejemplo de scripts en package.json:*/

/* "scripts": {

    "start": "node index.js",

        "dev": "nodemon index.js",

            "test": "jest"

}
npm start ejecuta node index.js.
npm run dev usa nodemon para reiniciar el servidor en cada cambio.
npm run test ejecuta pruebas con Jest.
Esto permite automatizar tareas comunes sin necesidad de escribir largos comandos manualmente. */

/* Creando nuestro primer programa en Node.js
Para probar Node.js, crearemos un archivo app.js con el siguiente contenido: */

console.log("Hola, Node.js!");
/* Luego lo ejecutamos en la terminal con:

node app.js
Si todo funciona correctamente, verás el mensaje "Hola, Node.js!" en la consola. */
/* Ejemplo básico de un servidor HTTP en Node.js:*/

const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola, mundo desde Node.js!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/* Este ejemplo crea un servidor web simple que responde con "Hola, mundo desde Node.js!" en el puerto 3000. Puedes guardar este código en un archivo llamado helloWorld.js

Después ejecutar el archivo

node helloWorld.js
En la terminal se verá un mensaje como este:

Server running at http://127.0.0.1:3000/

Ahora en tu navegador puedes visitar la url `http://127.0.0.1:3000/` se debería mostrar el mensaje`Hola, mundo desde Node.js!`.Con esto comprobamos que el servidor está funcionando correctamente.

Para detener la ejecución de este servidor en la terminal donde lo ejecutaste, utiliza la combinación de teclas Ctrl(windows) / Command(Mac) + c.
 */

/* Casos de uso en el mundo real
Node.js es ampliamente utilizado en diversas áreas de la tecnología y la vida cotidiana.Algunos ejemplos incluyen:

Aplicaciones web en tiempo real: Plataformas como WhatsApp Web y Slack utilizan Node.js para gestionar la comunicación en tiempo real.
Automatización de tareas: Herramientas como Gulp y Webpack usan Node.js para automatizar tareas en el desarrollo web.
Internet de las cosas(IoT): Node.js es popular en la creación de aplicaciones para dispositivos inteligentes.
Aplicaciones de streaming: Empresas como Netflix utilizan Node.js para gestionar sus sistemas de transmisión de contenido.
Aplicaciones de uso diario: Servicios de entrega de comida y transporte como Uber utilizan Node.js en sus servidores.
    Conclusión
Node.js y npm han revolucionado el desarrollo de software al proporcionar una manera eficiente y flexible de ejecutar JavaScript en el servidor y gestionar dependencias.Son herramientas fundamentales para cualquier desarrollador que quiera construir aplicaciones modernas y escalables. */