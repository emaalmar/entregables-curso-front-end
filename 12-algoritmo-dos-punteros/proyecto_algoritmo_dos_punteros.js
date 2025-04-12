/*Problema: Encuentra los Invitados que Pueden Sentarse Juntos
Tienes una lista de invitados ordenada alfabéticamente, y tu tarea es organizar la mesa para una cena. Sin embargo, algunos invitados prefieren sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo. Tu objetivo es encontrar el primer par de invitados consecutivos que puedan sentarse juntos según este criterio.

Instrucciones para resolver el problema:
Usa un puntero al inicio del arreglo y otro al siguiente elemento.
Compara las iniciales de los nombres en las posiciones de ambos punteros.
Si coinciden, detén la búsqueda y devuelve los nombres.
Si no coinciden, avanza ambos punteros y repite.
Detén la búsqueda si recorres toda la lista sin encontrar un par.
Puedes consultar un extracto de código para comenzar con la solución, se incluye un ejmplo de lo que se espera en la siguiente url: https://gist.github.com/heladio-devf-mx/e091e8dba47d51693cec1154f1cd2ed6*/


const invitados = ["Ana", "Cecilia", "Daniel", "Eduardo", "Carlos", "Fernando", "Gabriela", "Hugo", "Isabel", "Javier", "Karina", "Luis", "María", "Nadia", "Oscar", "Pablo", "Quintín", "Rosa", "Sofía", "Tania", "Ulises", "Valeria", "Walter", "Diana"];

function encontrarPareja(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    // arr.sort();
    let inicio = 0;
    let siguiente = 1;
    const lista = [];

    while (siguiente < arr.length) {
        // TODO: Compara las iniciales de los nombres en los punteros
        // Si coinciden, devuelve el par
        if (arr[inicio][0].toLowerCase() === arr[siguiente][0].toLowerCase()) {
            lista.push([arr[inicio], arr[siguiente]]);
            // Si se encuentra un par, regresa el par
            inicio += 2; // Salta al siguiente par
            siguiente += 2;
        } else {
            siguiente++;
            inicio++;
        }
    }

    if (lista.length > 0) {
        return lista; // Regresa el primer par encontrado
    } else {
        return null; // No se encontró ningún par
    }
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]