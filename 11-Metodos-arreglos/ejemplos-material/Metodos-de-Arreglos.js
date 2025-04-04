// ------------------------ Métodos de Arreglos (find, map, filter, foreach) -------------------------
/*Los métodos de arreglos en JavaScript son herramientas poderosas que te permiten manipular, transformar y analizar datos en un formato de lista. Si apenas estás empezando a conocer JavaScript, aprender estos métodos te ayudará a trabajar con datos de forma más eficiente y legible. Vamos a explorar los métodos más importantes.*/

//find()
/* El método find() devuelve el primer elemento en un arreglo que cumple con una condición dada. Si ningún elemento cumple la condición, retorna undefined.*/
const numeros = [10, 20, 30, 40];

const resultado = numeros.find(num => num > 25);

console.log(` El método find(): ${resultado}`); // 30

//map()
/*El método map() crea un nuevo arreglo aplicando una función a cada elemento del arreglo original, sin modificar el original.*/
const numeros1 = [1, 2, 3, 4];

const cuadrados = numeros1.map(num => num ** 2);

console.log(`El metodo map(): ${cuadrados}`); // [1, 4, 9, 16]

//filter()
/*El método filter() devuelve un nuevo arreglo que contiene todos los elementos que cumplen una condición especificada.*/
const numeros2 = [5, 10, 15, 20];

const mayores = numeros2.filter(num => num > 10);

console.log(`El metodo filter(): ${mayores}`); // [15, 20]

//forEach()
/*El método forEach() ejecuta una función para cada elemento del arreglo. No devuelve un nuevo arreglo ni modifica el original.*/
const frutas = ["manzana", "plátano", "naranja"];

frutas.forEach(fruta => console.log(`El metodo forEach(): ${fruta}`));

const numeros3 = [1, 2, 3];
numeros3.forEach(n => console.log(n * 2));

// manzana
// plátano
// naranja

//sort()
/* El método sort() se utiliza para ordenar los elementos de un arreglo en su lugar y devuelve el mismo arreglo ordenado. Por defecto, convierte los elementos a cadenas y los ordena en orden lexicográfico, lo que puede dar resultados inesperados al trabajar con números. Para personalizar el criterio de ordenación, se puede pasar una función de comparación como argumento. Por ejemplo, para ordenar números de menor a mayor, puedes usar arr.sort((a, b) => a - b). Este método es útil para organizar listas alfabéticamente, ordenar números o personalizar el orden de objetos.*/

const numeros4 = [30, 5, 20, 10];

numeros4.sort((a, b) => a - b); // Orden ascendente

console.log(`El metodo sort():${numeros4}`); // [5, 10, 20, 30]

//reduce()
/*El método reduce() ejecuta una función de callback sobre cada elemento del arreglo, acumulando un valor único que se devuelve al final. Este acumulador se actualiza en cada iteración según la lógica definida en la función. reduce() es versátil y puede usarse para sumar elementos, concatenar cadenas, crear objetos, o realizar operaciones más complejas. Por ejemplo, puedes sumar números con arr.reduce((acum, val) => acum + val, 0), donde 0 es el valor inicial del acumulador. Es un método poderoso para transformar arreglos en un solo valor o estructura.*/
const numeros5 = [1, 2, 3, 4];

const suma = numeros5.reduce((acumulador, num) => acumulador + num, 0);

console.log(`El metodo reduce():${suma}`); // 10

//some()
/*El método some() verifica si al menos un elemento de un arreglo cumple con la condición definida en una función de callback. Si encuentra un elemento que cumple la condición, detiene la iteración y devuelve true. Si ninguno cumple, devuelve false. Este método es ideal cuando solo necesitas comprobar la existencia de un elemento que cumpla ciertos criterios, por ejemplo, si en una lista de números hay al menos uno mayor que 10: arr.some(num => num > 10).*/
const numeros6 = [1, 2, 3, 4];

const hayMayores = numeros6.some(num => num > 3);

console.log(`El metodo some():${hayMayores}`); // true


//every()
/*El método every() evalúa si todos los elementos de un arreglo cumplen con una condición especificada en una función de callback. Si todos cumplen, devuelve true; si al menos uno no lo hace, devuelve false. Este método es útil para validar arreglos completos, como asegurarse de que todos los números de una lista sean positivos con arr.every(num => num > 0). Al igual que some, detiene la iteración en cuanto encuentra un resultado definitivo, lo que lo hace eficiente.*/

const numeros7 = [2, 4, 6, 8];

const sonPares = numeros7.every(num => num % 2 === 0);

console.log(sonPares); // true

//includes()
/*El método includes verifica si un arreglo contiene un valor específico, devolviendo true si lo encuentra y false en caso contrario. Es una forma sencilla y directa de realizar búsquedas en arreglos. A diferencia de some, includes no usa un callback y simplemente busca el valor exacto proporcionado. Es útil, por ejemplo, para verificar si un elemento existe en una lista o si una cadena contiene una subcadena determinada.*/

const frutas1 = ["manzana", "plátano", "naranja"];

const tieneManzana = frutas1.includes("manzana");

console.log(tieneManzana); // true

/*Casos de Uso en el Mundo Real
Algunos métodos adicionales se describen en la siguiente lección.

Aplicaciones de Tiendas en Línea

- filter(): Filtrar productos por precio o categoría.

- find(): Encontrar un producto específico basado en el ID.

Administración de Contactos

- map(): Crear una lista con solo los nombres de los contactos.

- includes(): Verificar si un nombre está en la lista de contactos.

Seguimiento de Hábitos

- every(): Verificar si completaste todas tus metas diarias.

- some(): Comprobar si al menos cumpliste una meta.

Orden de Calificaciones

- sort(): Ordenar calificaciones de estudiantes de mayor a menor.

Cálculos Financieros

- reduce(): Calcular el gasto total de una lista de transacciones.*/