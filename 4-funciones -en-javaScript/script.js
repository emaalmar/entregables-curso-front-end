/*
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
*/

//------------------------------------------------Ejercicios--------------------------------------
/*
//Ejercicio 1: Calculadora simple
//Ejemplos de implementación

function sumar (a, b) {
return a + b;
}
let sumar1 = (a, b) => a + b;
console.log(sumar1(13, 4));

function restar(a, b) {
    return a - b;
}

let restar1 = (a, b) => a - b;
console.log(restar1(13,4));

function multiplicar1(a, b) {
    return a * b;
}

const multiplication = (a, b) => a *b;
console.log(multiplication(14,4));

function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

const dividir1 = (a,b) => b === 0 ? "Error: División por cero" : a/b;
console.log(dividir1(14, 2)); // 7
console.log(dividir1(10, 0)); // "Error: División por cero"

// Llamadas a las funciones
console.log("Suma: " + sumar(5, 3));

console.log("Resta: " + restar(5, 3));

console.log("Multiplicación: " + multiplicar1(5, 3));

console.log("División: " + dividir(5, 0));
*/

//Ejercicio 2: Conversor de Temperaturas

//Crea una función que convierta temperaturas entre grados Celsius y Fahrenheit.

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log("20°C en Fahrenheit es: " + celsiusAFahrenheit(20));

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log("68°F en Celsius es: " + fahrenheitACelsius(68));
