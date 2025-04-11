// ------------------------------------------------- Módulos -------------------------------------------------------------------

/*Módulos
Los módulos permiten dividir el código en varios archivos. Esto facilita la reutilización y organización del código en aplicaciones grandes. Con import y export, puedes importar y exportar funciones o variables entre archivos.*/

/*// archivo math.js
export const add = (a, b) => a + b;
// archivo app.js
import { add } from './math.js';
console.log(add(2, 3)); // 5*/

// ------------------------------------------------- Promesas y manejo de asincronía --------------------------------------------

/* Promesas y manejo de asincronía
Las promesas son una de las formas modernas de manejar el código asincrónico, haciendo el código más legible y manejable. ES6 introdujo el concepto de promesas, y ES8 (2017) agregó async/await como una forma más fácil de trabajar con código asíncrono.

Ejemplo: */

// Antes de Promesas
setTimeout(function () {
    console.log("Hello");
}, 1000);

// Con Promesas y async/await
const sayHello = () => new Promise(resolve => setTimeout(() => resolve("Hello"), 1000));

sayHello().then(console.log); // Hello

// ------------------------------------for...in: Iterando sobre las Propiedades de un Objeto-----------------------------------

/* for...in: Iterando sobre las Propiedades de un Objeto
El for...in ha sido parte de JavaScript desde sus primeras versiones, y sigue siendo útil en ES6 y versiones posteriores. Este bucle se utiliza principalmente para recorrer las propiedades enumerables de un objeto. */

/*Sintaxis
for (let clave in objeto) {
  // Código que se ejecuta para cada propiedad
}
*/

let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}

/*for (let propiedad in persona) {
    if (persona.hasOwnProperty(propiedad)) {
        console.log(propiedad + ": " + persona[propiedad]);
    }
}
//Nota: Si deseas solo las propiedades "propias" de un objeto (y no las heredadas), puedes utilizar el método hasOwnProperty():
*/

// ------------------------------------for...of: Iterando sobre los Valores de un Arreglo o Iterables-----------------------------------

//Introducido en ES6, el bucle for...of es utilizado para iterar sobre los valores de arreglos y otros objetos iterables (como cadenas de texto, mapas, conjuntos, etc.), lo que lo hace mucho más flexible y legible que otras estructuras de control previas.

//Sintaxis:
//for (let valor of iterable) {
// Código que se ejecuta para cada valor }

let numeros = [10.1, 20.1, 30.1, 40.1];

for (let numero of numeros) {
    console.log(numero);
}

/*Explicación:
El for...of recorre directamente los valores de un iterable, como un arreglo o una cadena de texto. En cada iteración, la variable numero toma el valor de cada elemento del arreglo.*/
/*Nota: for...of no puede ser usado directamente para objetos. Para recorrer las propiedades de un objeto, debes utilizar for...in o métodos como Object.keys(), Object.values() o Object.entries().*/

// ------------------------------------ forEach(): Iteración funcional (Arreglos) --------------------------------------

/*Introducido en ES5, forEach() es un método de los arreglos que ejecuta una función en cada uno de los elementos de un arreglo. Aunque no es una estructura de control, es muy útil cuando trabajas con arreglos.*/

/*Sintaxis:
arreglo.forEach(function(elemento, indice, arreglo) {
  // Código que se ejecuta para cada elemento
});
*/

let numeros1 = [10, 20, 30, 40];

numeros1.forEach(function (numero) {
    console.log(numero);
});


//-------------------------------------- map(): Iteración y Transformación (Arreglos) ----------------------------------

/* Introducido en ES5, map() es un método de los arreglos que te permite recorrer un arreglo y devolver un nuevo arreglo con los resultados de aplicar una función a cada uno de los elementos del arreglo original. */
/*let nuevoArreglo = arreglo.map(function(elemento) {
return // transformación de elemento ;
});*/

let numeros2 = [1, 2, 3, 4];

let cuadrados = numeros2.map(function (numero) {
    return numero * numero;
});

console.log(cuadrados);