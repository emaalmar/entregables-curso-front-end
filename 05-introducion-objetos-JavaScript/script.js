// Sintaxis de objeto literal
const persona = {
    nombre: "Juan",

    edad: 30,

    ocupacion: "Desarrollador"
};

// Usando el constructor Object
const coche = new Object();
coche.marca = "Toyota";
coche.modelo = "Corolla";
coche.año = 2020;

//Usando clases (ES6)

class Animal {
    constructor(especie, sonido) {
        this.especie = especie;
        this.sonido = sonido;
    }

    hacerSonido() {
    console.log(this.sonido);
    }
}
const perro = new Animal("Perro", "Guau");

//--------------------------------Acceso a propiedades ------------------------------------

//Notacion de punto.
console.log(persona.nombre);

//Notación de corchetes
console.log(persona["edad"]);

//--------------------------------Modificación a propiedades ------------------------------------

persona.edad = 31; // Modificar
persona.email = "juan@example.com"; // Agregar
console.log(persona["email"]);
console.log(persona["edad"]);

//--------------------------------Metodos de Objetos ------------------------------------
const calculadora = {
    sumar: function(a, b) {
        return a + b;
    },
    restar: function(a, b){
        return a - b;
    }
}

console.log(calculadora.sumar(5, 3));
console.log(calculadora.restar(5, 3));

//----------------------------------- Ejercicios -----------------------------------------

class Auto {
    constructor(marca, modelo, año) {
        this.marca=marca;
        this.modelo=modelo;
        this.año=año;
    }

    mostrarInfo(){
        return `Este carro pertenece a la marca: ${this.marca} y al modelo: ${this.modelo} y es del año ${this.año}.`;
    }
}

// Crear una instancia de Auto
let miAuto = new Auto ("Audi", "A4", "1999");

// Llamar al método mostrarInfo() desde la instancia
console.log(miAuto.mostrarInfo());