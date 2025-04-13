/*¿Qué es Divide and Conquer?
El enfoque Divide and Conquer se basa en tres pasos fundamentales:

1. Dividir: El problema grande se divide en subproblemas más pequeños y similares al original.

2. Conquistar: Los subproblemas se resuelven, generalmente utilizando recursión.

3. Combinar: Las soluciones de los subproblemas se combinan para formar la solución del problema original.

Este enfoque aprovecha la recursividad para simplificar la resolución de los subproblemas y luego combina las soluciones parciales de manera eficiente.

Ejemplo básico: Encontrar el elemento máximo en un arreglo
Si tenemos un arreglo, podemos dividirlo en dos mitades, encontrar el máximo en cada mitad y luego comparar los máximos para encontrar el mayor.*/

/*Ejemplo práctico: Suma de un arreglo
Supongamos que queremos calcular la suma de todos los elementos en un arreglo usando “Divide and Conquer”.*/

function sumArray(arr) {
    // Caso base: Si el arreglo tiene un solo elemento
    if (arr.length === 1) {
        console.log(`Caso base alcanzado con: ${arr[0]}`);
        return arr[0];
    }

    // Dividir: Dividimos el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // console.log(`Dividiendo: [${arr}]`);
    // console.log(`  Left: [${left}]`);
    // console.log(`  Right: [${right}]`);

    // Conquistar: Calculamos la suma de cada mitad recursivamente
    const leftSum = sumArray(left);
    // console.log(`leftSum de [${left}] = ${leftSum}`);

    const rightSum = sumArray(right);
    // console.log(`rightSum de [${right}] = ${rightSum}`);

    // Combinar: Sumamos los resultados
    const total = leftSum + rightSum;
    // console.log(`Sumando: ${leftSum} + ${rightSum} = ${total} para [${arr}]`);

    return total;
}

// Ejemplo de uso
const numbers = [1, 2, 3, 4, 5];
console.log(`Suma total: ${sumArray(numbers)}`);



/*Ejemplo clásico: Merge Sort
El algoritmo Merge Sort usa Divide and Conquer para ordenar un arreglo.

Dividir el arreglo en mitades hasta que cada parte tenga un solo elemento.
Conquistar combinando los elementos de forma ordenada.
Combinar las mitades ordenadas para formar un arreglo completamente ordenado.
Código simplificado:*/

function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Caso base
    // Dividir
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    // Combinar
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    // Añadimos elementos restantes
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Ejemplo de uso

const array = [5, 2, 9, 1, 5, 6];

console.log(mergeSort(array)); //