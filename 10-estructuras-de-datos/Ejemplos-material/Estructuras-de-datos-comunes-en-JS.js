//Estructuras de datos comunes en JS

/*Pilas (Stacks)
Una pila es una estructura de datos que sigue el principio de último en entrar, primero en salir (LIFO, por sus siglas en inglés). Esto significa que el último elemento agregado a la pila será el primero en ser removido. Puedes imaginar una pila de platos, donde solo puedes tomar el plato de la parte superior.*/

/*Ejemplo de uso de pilas:
En los navegadores web, cuando navegas a través de páginas, se usa una pila para mantener el historial de navegación. Cada vez que cargas una nueva página, esta se agrega a la pila, y cuando usas el botón "Atrás", el navegador elimina la página más reciente (última en entrar) de la pila.*/

let pila = [];

pila.push("Página 1");

pila.push("Página 2");

pila.push("Página 3");

console.log(pila.pop());  // Imprime "Página 3", la última página visitada

/*Colas (Queues)
Una cola es una estructura de datos que sigue el principio de primero en entrar, primero en salir (FIFO, por sus siglas en inglés). Es como una fila de personas esperando en un banco: la primera persona en llegar es la primera en ser atendida.*/

/*Ejemplo de uso de colas:
Las colas se usan comúnmente en sistemas de impresión, donde los trabajos de impresión se procesan en el orden en que fueron enviados. El primer trabajo que llega a la cola será el primero en ser impreso.*/

let cola = [];

cola.push("Trabajo 1");

cola.push("Trabajo 2");

cola.push("Trabajo 3");

console.log(cola.shift());  // Imprime "Trabajo 1", el primero en entrar

/*Conjuntos (Sets)
Un conjunto es una estructura de datos que almacena elementos únicos, es decir, no permite duplicados. Esto lo hace útil cuando necesitas garantizar que no haya elementos repetidos en una colección de datos.*/

/*Ejemplo de uso de conjuntos:
Imagina que estás construyendo una lista de usuarios que han participado en un evento. Aunque un usuario podría registrarse varias veces, solo te interesa contar a cada persona una vez. Un conjunto te ayudaría a manejar esto de manera eficiente.*/

let usuarios = new Set();

usuarios.add("Juan");

usuarios.add("Ana");

usuarios.add("Juan");  // No se agrega, porque "Juan" ya está en el conjunto

console.log(usuarios);  // Imprime Set {"Juan", "Ana"}

/*Mapas (Maps)
Un mapa es una estructura de datos similar a un objeto, pero permite usar cualquier tipo de clave, no solo cadenas. Además, los mapas mantienen el orden de inserción de los elementos.*/

/*Ejemplo de uso de mapas:
Imagina que estás desarrollando una aplicación de compras en línea. Puedes usar un mapa para asociar un código de producto único a su precio.*/

let precios = new Map();

precios.set("productoA", 25);

precios.set("productoB", 40);

precios.set("productoC", 15);

console.log(precios.get("productoB"));  // Imprime 40

/*Árboles (Trees)
Un árbol es una estructura jerárquica en la que cada elemento (nodo) tiene un valor y una lista de referencias a otros nodos, que se llaman hijos. Los árboles son útiles cuando se necesita representar relaciones jerárquicas, como la estructura de un sistema de archivos o la organización de una empresa.*/

/* Ejemplo de uso de árboles:
Un sistema de archivos en un computador está representado como un árbol, donde cada carpeta es un nodo, y las subcarpetas y archivos son nodos hijos de las carpetas correspondientes.*/

let arbol = {

    nombre: "Root",

    hijos: [

        { nombre: "Carpeta 1", hijos: [] },
        { nombre: "Carpeta 2", hijos: [{ nombre: "Subcarpeta", hijos: [] }] }
    ]
};

console.log(arbol.hijos[1].hijos[0].nombre);  // Imprime "Subcarpeta"