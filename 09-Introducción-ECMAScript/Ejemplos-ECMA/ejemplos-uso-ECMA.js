//Ejercicio práctico: Uso de let, const y funciones flecha
//     let widthBase = width;
//     const multiplier = 2;
//     return widthBase * height * multiplier;
// };

// console.log(calculateArea(5, 10));

//Ejercicio práctico: Trabajando con Promesas y async/await

// const fetchUserData = () => {
//     return new Promise (resolve =>{
//         setTimeout(() => {
//             resolve ({ id:1, name: "Alice"});
//         }, 2000)
//     });
// };

// const getUser = async () => {
//     const userData = await fetchUserData();
//     console.log("Datos del usuario:", userData);
// };
// getUser();


//Clases en JavaScript
// class Producto {
//     constructor(nombre, precio) {
//         this.nombre = nombre;
//         this.precio = precio;
//     }

//     obtenerDetalles() {
//         return `Producto: ${this.nombre}, Precio: ${this.precio}`;
//     }
// }

// const producto1 = new Producto('Laptop', 1200);
// console.log(producto1.obtenerDetalles());

//Ejercicio práctico:

/*class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    obtenerDetalles() {
        return `${this.nombre} - Precio: ${this.precio} - Stock: ${this.cantidad}`;
    }

    actualizarStock(cantidad) {
        this.cantidad += cantidad;
    }
}

const producto1 = new Producto('Camiseta', 25, 100);
producto1.actualizarStock(-20);
console.log(producto1.obtenerDetalles());  // Camiseta - Precio: 25 - Stock: 80
*/

//Módulos (import/export)
//Antes de ES6 (CommonJS):
/*// utils.js
function saludar(nombre) {
    return `Hola, ${nombre}`;
}

module.exports = saludar;

// app.js
const saludar = require('./utils');
console.log(saludar('Juan')); */

// // utils.js
// export function saludar(nombre) {
//     return `Hola, ${nombre}`;
// }

// // app.js
// import { saludar } from './utils';
// console.log(saludar('Juan'));