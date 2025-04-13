/*¿Qué es la Recursión?
La recursión es una técnica en programación donde una función se llama a sí misma. Este enfoque se utiliza para resolver problemas dividiéndolos en subproblemas más pequeños del mismo tipo. Para que la recursión funcione correctamente, debe haber una condición base que detenga las llamadas recursivas.

Cómo funciona la Recursión
Caso base: La condición que detiene la recursión.
Llamada recursiva: La función se llama a sí misma con una versión más simple del problema.
Ejemplo básico: Factorial de un número
El factorial de un número n (representado como n!) es el producto de todos los enteros positivos desde 1 hasta n.

Código de la solución:*/

function factorial(n) {
    // Caso base: si n es 0, el factorial es 1
    if (n === 0) {
        return 1;
    }

    // Llamada recursiva: multiplicar n por el factorial de n-1
    return n * factorial(n - 1);
}
// 5*4*3*2*1 = 120
console.log(factorial(5)); //

/*Explicación:

Para calcular  factorial(5), la función calcula   5×factorial(4), y así sucesivamente.
Cuando llega a  factorial(0), devuelve 1 y se detiene la recursión.*/


/*¿Qué es el Backtracking?
El backtracking (o retroceso) es una técnica para resolver problemas de búsqueda y optimización. Explora todas las posibilidades y retrocede cuando detecta que una solución parcial no puede conducir a una solución completa.

Es especialmente útil en problemas donde se debe encontrar todas las combinaciones o permutaciones posibles. El backtracking utiliza recursión para explorar las soluciones.

Cómo funciona el Backtracking
Exploración: Se toma una posible solución y se prueba.
Validación: Si no funciona, se retrocede y se prueba otra opción.
Determinación: Si se encuentra una solución válida, se almacena o se muestra.
Aquí tienes un ejemplo sencillo de cómo aplicar backtracking. Se basa en la idea de generar todas las posibles combinaciones de letras a partir de un conjunto dado.

Ejemplo: Generar combinaciones de letras
Supongamos que queremos generar todas las combinaciones posibles de un conjunto de letras, como ['a', 'b', 'c']. Este problema es perfecto para practicar backtracking porque debemos probar todas las combinaciones posibles y retroceder para explorar las opciones restantes.

Código de la solución*/

function generateCombinations(letters, current, index, results) {
    // Agregar la combinación actual al resultado
    results.push(current);

    // Iterar a partir del índice actual
    for (let i = index; i < letters.length; i++) {
        // Llamar recursivamente añadiendo la letra actual
        generateCombinations(letters, current + letters[i], i + 1, results);
    }
}

function findAllCombinations(letters) {
    const results = [];
    generateCombinations(letters, '', 0, results);
    return results;
}

// Ejemplo de uso
const letters = ['a', 'b', 'c'];
console.log(findAllCombinations(letters));

/*
Salida esperada:

[
    '',        'a',       'ab',

    'abc',     'ac',      'b',

    'bc',      'c'
]
*/