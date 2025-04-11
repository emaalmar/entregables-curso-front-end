//--------------------------------EJEMPLOS WHILE------------------------------------

// let contador = 0;

// while (contador < 10) {

//     console.log(contador + 1);
//     contador++;
// }

// let contadorReverse = 10;

// while (contadorReverse > 0) {

//     console.log(contadorReverse );
//     contadorReverse--;
// }

// let contadorEven = 0;

// while (contadorEven < 10) {
//     let contador = contadorEven % 2 == 0
//     console.log(contador);
//     contadorEven++;
// }

// let i = 0;
// while (i < 3) {
//     console.log(i); i++;
// }

// let suma = 0;
// let numero = 1;
// while (suma < 5) {
//     suma += numero;
//     numero++;
// }
// console.log(suma);
// let contador = 0;

// while (contador < 10) {

//     console.log(contador);
//     contador += 2;
// }




//--------------------------------------EJEMPLO FOR--------------------------------------------
//Ejemplo 1: Imprime numero del 0 al 9

/*for (let i = 0; i < 10; i++) {
    console.log(i);
}*/

//Ejemplo 2: Sumar numero en un rango

// let suma = 0;
// for (let i = 1; i <= 10; i++) {
//     suma += i; // Sumar el número actual a la suma total
//     // 0 + 1 = 1
//     // 1 + 2 = 3
//     // 3 + 3 = 6
//     // 6 + 4 = 10
//     // 10 + 5 = 15
//     // 15 + 6 = 21
//     // 21 + 7 = 28
//     // 28 + 8 = 36
//     // 36 + 9 = 45
//     // 45 + 10 = 55
//     console.log(suma);
// }
// console.log(suma); // Imprime: 55


// for( let i = 10; i > 0; i-- ){
//     console.log(i);
// }

// let suma = 0;
// for (let i = 0; i <= 10; i += 2) {
//     suma += i; // Sumar el número actual a la suma total
//     // 0 + 0 = 0
//     // 0 + 2 = 2
//     // 2 + 4 = 6
//     // 6 + 6 = 12
//     // 12 + 8 = 20
//     // 20 + 10 = 30
//     console.log(suma);
// }
// console.log(suma); // Imprime: 30

// for (let i = 0; i < 3; i++) {
//     console.log("Hola");
// }

// let suma = 0;
// for (let i = 1; i <= 5; i++){
//     suma += i;
// }
// console.log(suma);


//---------------------------------------------EJEMPLOS ARRAYS--------------------------
// // Array de frutas
// let frutas = ['manzana', 'plátano', 'naranja'];
// console.log(frutas);
// // Array de números
// let numeros = [1, 2, 3, 4, 5];
// // Array vacío
// let vacio = [];

// // Acceso datos:
// console.log(frutas[0]); // Salida: "manzana"
// console.log(frutas[2]); // Salida: "plátano"

// // Modificar datos:
// frutas[1] = 'pera';
// console.log(frutas);
// // Ahora el array es ['manzana', 'pera', 'plátano', 'kiwi']

// // Añadir elementos al final:
// frutas.push('kiwi');
// console.log(frutas);
// // Imprime: ['manzana', 'pera', 'naranja', 'kiwi']


// // Añadir elementos al inicio:
// frutas.unshift('cereza');
// console.log(frutas);
// // Imprime: ['cereza', 'manzana', 'pera', 'naranja', 'kiwi']

// //Eliminar elementos al final:
// frutas.pop();
// console.log(frutas);
// // Imprime: ['cereza', 'manzana', 'pera', 'naranja']

// //Eliminar elementos al inicio:
// frutas.shift();
// console.log(frutas);
// // Imprime: ['manzana', 'pera', 'naranja']

// //Conocer la longitud de un array:
// console.log(frutas.length); // Salida: 3
// console.log(frutas[frutas.length - 2]); // Salida: "'pera'"

// //iterar sobre un Array

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]); // Imprime cada fruta
//

/*
//Ejercicio Práctico
//1. Crear un Array: Crea un array llamado colores con al menos cuatro colores diferentes.
let colores = ['rojo', 'verde', 'azul', 'amarillo'];
//2. Imprimir el Segundo Color: Imprime el segundo color del array.
console.log(colores[1]); // Imprime: verde
//3. Modificar el Tercer Color: Cambia el tercer color a otro color de tu elección.
colores[2] = 'naranja'; // Cambia 'azul' a 'naranja'
//4. Añadir un Nuevo Color: Añade un nuevo color al final del array.
colores.push('violeta');
//5. Eliminar el Primer Color: Elimina el primer color del array y muestra el resultado.
colores.shift();
// colores[2]= null;
console.log(colores); // Muestra el array modificado
*/



/*
let colors = ['rojo', 'verde', 'azul', 'amarillo'];
// colors.splice (2, 0, 'purple');
// 0        1        2         3        4
//['rojo', 'verde', 'purple', 'azul', 'amarillo']
// no se elimina ninguno dato desde la posición 2
console.log(colors);


// colors.splice (2, 2, 'purple');
//
// ['rojo', 'verde', 'purple']
// // se eliminan dos datos desde la posición dos
// console.log(colors);

let newColors = colors.splice(1, 2, 'Cian', 'orange','yellow')
console.log(newColors);
console.log(colors);

colors.splice(colors.length -3,1);
console.log(colors);

colors.splice(2);
*/


