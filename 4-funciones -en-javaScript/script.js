function saludar1(nombre) {
    console.log("Hola, " + nombre + "!");
}

saludar1("Juan"); // Imprime: Hola, Juan!


//Parametros y argumentos

// // Sin parámetros:
// function funcionSinParametros() { ... }
// //Con un parámetro:
// function funcionConUnParametro(parametro) { ... }

// // Con múltiples parámetros:
// function funcionConMultiplesParametros(param1, param2) { ... }


//Valores retorno
function sumar(a, b) {

    return a + b; // Devuelve la suma de a y b

}
let resultado = sumar(3, 5);
console.log(resultado); // Imprime: 8

//Alcance de Variables
    //Variables locales: Declaradas dentro de una función y solo accesibles dentro de esa función.
    //Variables globales: Declaradas fuera de cualquier función y accesibles en cualquier parte del código.

let x = 10; // Variable global

function mostrarX() {

    let y = 5; // Variable local

    console.log("X es: " + x); // Accede a la variable global

    console.log("Y es: " + y); // Accede a la variable local

    }

mostrarX();

// console.log(y); // Error: y is not defined

//FUNCIONES ANONIMAS
const saludar = function(nombre) {
    console.log("Hola, " + nombre + "!");
};
saludar("María"); // Imprime: Hola, María!

//FUNCIONES DE FLECHA

const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 5)); // Imprime: 20

