/*¿Qué es el Algoritmo de los Dos Punteros?
El algoritmo de los dos punteros es una técnica que utiliza dos variables o "punteros" que recorren un arreglo desde diferentes posiciones (por ejemplo, uno desde el inicio y otro desde el final) para analizar datos y encontrar soluciones a ciertos problemas.

Este enfoque es eficiente porque reduce la cantidad de iteraciones necesarias, logrando una complejidad de tiempo de O(n) en muchos casos, en lugar de O(n²) que tendrías con bucles anidados (podrías revisar esta nomenclatura en el curso de Algoritmos que está disponible en el campus).

Ejemplo Conceptual
Supongamos que tenemos un arreglo ordenado y queremos encontrar si dos números suman un valor objetivo:*/

const numeros = [1, 2, 3, 4, 6];

const objetivo = 6;

/*En lugar de usar bucles anidados, colocaremos dos punteros: uno al principio (inicio) y otro al final (fin) del arreglo. Estos punteros se moverán dependiendo de si la suma es mayor o menor que el objetivo.

Implementación Básica del Algoritmo*/

function dosPunterosSuma(arr, objetivo) {
    let inicio = 0; // Primer puntero
    let fin = arr.length - 1; // Segundo puntero

    while (inicio < fin) {
        const suma = arr[inicio] + arr[fin];

        if (suma === objetivo) {
            return [arr[inicio], arr[fin]]; // Regresamos los números que cumplen la condición
        }

        if (suma < objetivo) {
            inicio++; // Si la suma es menor, movemos el puntero del inicio a la derecha
        } else {
            fin--; // Si la suma es mayor, movemos el puntero del fin a la izquierda
        }
    }

    return null; // No se encontró ninguna pareja
}

console.log(dosPunterosSuma([1, 2, 3, 4, 6], 6)); // [2, 4]
console.log(dosPunterosSuma(numeros, objetivo)); // [2, 4]

/*Casos Comunes para los Dos Punteros
Encontrar un Palíndromo
Podemos usar dos punteros para verificar si una palabra es un palíndromo (se lee igual al derecho y al revés).*/

function esPalindromo(palabra) {
    let palabraSinEspacios = palabra.replace(/\s/g,"").toLowerCase();

    let inicio = 0;
    let fin = palabraSinEspacios.length - 1;


    while (inicio < fin) {
        if (palabraSinEspacios[inicio] !== palabraSinEspacios[fin]) {
            return false; // Si no coinciden, no es un palíndromo
        }
        inicio++;
        fin--;
    }
    return true; // Es un palíndromo
}

console.log(esPalindromo("anita lava la tina")); // true
console.log(esPalindromo("javascript")); //
// console.log(esPalindromo(" ")); // true

/*Eliminar Duplicados en un Arreglo Ordenado
Cuando un arreglo está ordenado, los dos punteros pueden ayudarte a identificar duplicados y crear un nuevo arreglo con solo elementos únicos.*/
function eliminarDuplicados(arr) {
    let puntero = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[puntero]) {
            puntero++;
            arr[puntero] = arr[i];
        }
    }
    return arr.slice(0, puntero + 1);
}

let arre = [11, 1, 1, 2, 2, 3, 5, 10, 4, 1, 4]
let _name = "Juanito";
// const arre_ordenado = arre.sort((a, b) => a - b);

const arre_palabras = ["alan", "brando", "carolina", "antony", "belen", "cris", "alan", "brando", "carolina", "antony", "belen", "cris", "juan",`Pedro ${_name} `];
// const arre_palabras_ordenado = arre_palabras.sort();
console.log(eliminarDuplicados(arre)); // [1, 2, 3, 4]
console.log(eliminarDuplicados(arre_palabras)); // ["alan", "antony", "belen", "brando", "carolina", "cris", "juan"]

/*Comparar Dos Listas
Los dos punteros pueden ayudar a comparar elementos de dos listas ordenadas y encontrar intersecciones.*/

function encontrarInterseccion(lista1, lista2) {
    let puntero1 = 0;
    let puntero2 = 0;
    const interseccion = [];

    while (puntero1 < lista1.length && puntero2 < lista2.length) {
        if (lista1[puntero1] === lista2[puntero2]) {
            interseccion.push(lista1[puntero1]);
            puntero1++;
            puntero2++;
        } else if (lista1[puntero1] < lista2[puntero2]) {
            puntero1++;
        } else {
            puntero2++;
        }
    }
    return interseccion;
}

console.log(encontrarInterseccion([1, 2, 4, 5], [2, 3, 4, 6])); //