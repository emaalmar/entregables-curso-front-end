function findMax(arr) {
    // TODO: Agregar la condición del caso base
    if (arr.length === 1) {
        return arr[0]; // Caso base: solo un elemento
    }

    // TODO: Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid); // Primera mitad
    const right = arr.slice(mid); // Segunda mitad

    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // TODO: Combinar las soluciones comparando los máximos
    const max = Math.max(leftMax, rightMax); // Encontrar el máximo entre ambas mitades
    return max; // Retornar el máximo encontrado
}
// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10