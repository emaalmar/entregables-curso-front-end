/*1. ¿Qué es el Sistema de Archivos (File System) en Node.js?
El módulo fs de Node.js proporciona una API para interactuar con el sistema de archivos de manera fácil y eficiente. Con este módulo, puedes realizar operaciones como leer, escribir, eliminar y renombrar archivos o directorios.

Ejemplo*/

const fs = require('fs');

// Verificando si un archivo existe
const filePath = './example.txt';

if (fs.existsSync(filePath)) {
    console.log('El archivo existe.');
} else {
    console.log('El archivo no existe.');
}
/*Explicación: El código anterior utiliza fs.existsSync para comprobar si un archivo llamado example.txt está presente en el sistema.*/

/*2. Leer Archivos
Node.js ofrece métodos síncronos y asíncronos para leer archivos. Usar métodos asíncronos es ideal para aplicaciones modernas ya que no bloquean el flujo del programa.

Ejemplo: Lectura Asíncrona*/

fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    console.log('Contenido del archivo:', data);
});
/*Explicación: En este ejemplo, usamos fs.readFile para leer el archivo de forma asíncrona. Esto significa que la aplicación puede continuar procesando otras tareas mientras espera la respuesta.*/

/*3. Escribir Archivos
Para escribir en un archivo, Node.js ofrece métodos como fs.writeFile y fs.appendFile. El primero sobrescribe el contenido existente, mientras que el segundo agrega texto al final del archivo.

Ejemplo: Escritura de Archivos*/

fs.writeFile('./example.txt', 'Hola, Node.js!', (err) => {
    if (err) { // manejo de errores
        console.error('Error al escribir en el archivo:', err);
        return;
    }

    console.log('Archivo escrito con éxito.');
});
/*Explicación: Este código crea un archivo (o sobreescribe uno existente) y escribe la frase "Hola, Node.js!" en él.*/

/*Eliminar Archivos
Eliminar archivos es útil cuando necesitas gestionar espacio o borrar datos innecesarios.

    Ejemplo: Eliminación de Archivos*/
fs.unlink('./example.txt', (err) => {
    if (err) {
        console.error('Error al eliminar el archivo:', err);
        return;
    }

    console.log('Archivo eliminado con éxito.');

});

/*Explicación: fs.unlink elimina un archivo del sistema.Es importante manejar errores en caso de que el archivo no exista.*/