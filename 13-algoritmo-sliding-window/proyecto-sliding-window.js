function findLongestWord(text) {
    // : Dividir el texto en palabras y almacenarlas en una variable
    const re = /\s*(?:[.,;]|\s)\s*/;
    const words = text.split(re);

    let longestWord = ''; // Inicializar la palabra más larga

    // : Recorrer el arreglo de palabras con un ciclo
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {

            longestWord = words[i];
        }
    }
    return longestWord; // Retornar la palabra más larga
}

    // Ejemplo de uso
    const texto = "JavaScript es un lenguaje de programación. increíble para aprender.";
    // : Llama a la función y muestra el resultado
    console.log(findLongestWord(texto)); // Resultado esperado: "programación"
















/*function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator);

    console.log("The original string is:", stringToSplit);
    console.log("The separator is:", separator);
    console.log(
        "The array has",
        arrayOfStrings.length,
        "elements:",
        arrayOfStrings.join(" / "),
    );
}

const tempestString = "Oh brave new world that has such people in it.";
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const space = " ";
const comma = ",";

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
*/

/*const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

// const re = /\s*(?:;|$)\s;
const nameList = names.split(re);

console.log(nameList);

*/




















































































