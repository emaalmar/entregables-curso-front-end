/*Otras estructuras de datos comunes en desarrollo de software
En desarrollo de software, existen otras estructuras de datos que juegan un papel fundamental en la organización y manipulación eficiente de datos. A continuación, se presentan algunas de estas estructuras adicionales, junto con ejemplos de su aplicación práctica en el desarrollo de software.*/

/*Listas (Lists)
Una lista es una estructura de datos que almacena una colección ordenada de elementos. A diferencia de los arreglos, las listas pueden tener un comportamiento más flexible, y pueden implementarse de diferentes maneras dependiendo de si son listas estáticas o listas dinámicas.

- Listas estáticas: Son similares a los arreglos y su tamaño no cambia después de ser creadas.

- Listas dinámicas: Pueden crecer y reducir su tamaño durante la ejecución del programa, lo que las hace más eficientes en cuanto a memoria en ciertos escenarios.*/

/*Ejemplo de uso de listas:
En una aplicación de gestión de tareas, una lista dinámica podría almacenar las tareas de un usuario, permitiendo agregar y eliminar tareas de manera eficiente sin preocuparse por el tamaño del contenedor.*/

// Este ejemplo ilustra el comportamiento básico de una lista estática


let listaDeTareas = ["Comprar pan", "Llamar a mamá", "Enviar correo"];

listaDeTareas.push("Ir al gimnasio");  // Añadir una tarea a la lista

console.log(listaDeTareas);

/*  Listas Ligadas (Linked Lists)
Una lista ligada es una estructura de datos compuesta por nodos, donde cada nodo contiene un valor y una referencia (o enlace) al siguiente nodo en la secuencia. A diferencia de los arreglos y las listas, las listas ligadas no almacenan sus elementos de manera contigua en memoria. Esta característica permite una inserción y eliminación de elementos más eficiente en ciertas situaciones.

Listas ligadas simples: Cada nodo tiene un solo enlace que apunta al siguiente nodo.
Listas doblemente ligadas: Cada nodo tiene dos enlaces: uno al siguiente nodo y otro al nodo anterior.*/

/*Ejemplo de uso de listas ligadas:
Una aplicación de navegación hacia atrás (como un historial de navegador) puede usar una lista ligada para almacenar cada página visitada, y puedes navegar hacia adelante o hacia atrás de manera eficiente utilizando enlaces en cada nodo.*/

// Nodo de lista ligada básico

function Nodo(valor) {
    this.valor = valor;
    this.siguiente = null;  // Enlace al siguiente nodo
}

// Crear una lista ligada simple
let nodo1 = new Nodo("Página 1");
let nodo2 = new Nodo("Página 2")
let nodo3 = new Nodo("Página 3");

// Enlazar los nodos
nodo1.siguiente = nodo2;
nodo2.siguiente = nodo3;
console.log(nodo1.siguiente.valor);  // Imprime "Página 2"

/*Conjuntos de Elementos (Sets) o Bolsas (Bags)
Un conjunto o bag (bolsa) es una estructura de datos que almacena elementos sin un orden específico y sin permitir duplicados. En otras palabras, un conjunto es similar a un conjunto matemático, y se usa principalmente para verificar la pertenencia de un elemento de manera eficiente.

A diferencia de un conjunto matemático, un bag o "bolsa" permite duplicados, pero todavía no mantiene un orden en los elementos.*/

/*Ejemplo de uso de un "bag":
En una aplicación de compras en línea, un "bag" podría representar el carrito de compras, donde los usuarios agregan productos (y los mismos productos pueden aparecer varias veces).*/
let carritoDeCompras = new Set();  // Usamos Set para evitar duplicados

carritoDeCompras.add("Zapatos");

carritoDeCompras.add("Camiseta");

carritoDeCompras.add("Zapatos");  // No se agregará porque "Zapatos" ya está en el conjunto

console.log(carritoDeCompras);  // Imprime Set {"Zapatos", "Camiseta"}

// Si quisiéramos permitir duplicados, se podría usar una estructura como un mapa, un objeto, o una lista.

/*Tablas Hash (Hash Tables)
Una tabla hash es una estructura de datos que mapea claves a valores a través de una función hash. La función hash convierte una clave en un índice en una tabla interna, lo que permite acceso en tiempo constante (O(1)) en promedio.*/

/*Ejemplo de uso de una tabla hash:
En un sistema de autenticación de usuarios, podrías usar una tabla hash para almacenar los pares de nombre de usuario y contraseña para realizar búsquedas rápidas.*/
let usuarios = new Map();

usuarios.set("juan123", "password123");

usuarios.set("ana456", "password456");

console.log(usuarios.get("juan123"));  // Imprime "password123"

/*Colas de Prioridad (Priority Queues)
Una cola de prioridad (o pila de prioridad) es una estructura de datos que almacena elementos con una prioridad asociada, y siempre extrae el elemento con la prioridad más alta (o baja, dependiendo de la implementación). En una cola de prioridad, los elementos no se extraen en el orden en que fueron insertados, sino en función de su prioridad.*/

/*Ejemplo de uso de una cola de prioridad:
En un sistema de gestión de tareas o trabajos, se podría utilizar una cola de prioridad para procesar primero las tareas más urgentes o importantes.*/

class ColaDePrioridad {
    constructor() {
        this.items = [];
    }

    agregar(item, prioridad) {
        this.items.push({ item, prioridad });
        this.items.sort((a, b) => b.prioridad - a.prioridad);  // Ordena por prioridad
    }

    extraer() {
        return this.items.shift();  // Extrae el primer elemento (el de mayor prioridad)
    }
}

let cola = new ColaDePrioridad();
cola.agregar("Tarea urgente", 8);
cola.agregar("Tarea normal", 3);
console.log(cola.extraer());  // Imprime { item: "Tarea normal", prioridad: 3 }

/*Comparación de estructuras:

Estructura	Tiempo búsqueda	Caso de uso ideal
Tabla hash	O(1)	Diccionarios, búsquedas rápidas
Arreglo	O(n)	Acceso por índice
Lista ligada	O(n)	Inserción/eliminación frecuente
Cola prioridad	O(log n)	Gestión de prioridades*/
