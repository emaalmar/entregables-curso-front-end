// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// : Completa esta función para que busque recursivamente el regalo en la lista

function findGift(gifts, giftName, index = 0) {
    // Caso base: Si llegamos al final de la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }


    return findGift(gifts, giftName, index + 1);

  // : Incluye el caso base donde se llega al final de la lista.
  // : Incluye el caso base donde se encuentra el regalo.
  // : Realiza la llamada recursiva para seguir buscando el regalo.

}

// Casos de ejemplo:
// Llama a la función con los datos de entrada y muestra el resultado en la consola.
// Llama a la función y prueba con diferentes regalos
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
// Salida esperada:
// "Lego está en la posición 3."

// Caso cuando el regalo no está en la lista
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));
// Salida esperada:
// "Camión no está en la lista."

console.log(gifts[3]);