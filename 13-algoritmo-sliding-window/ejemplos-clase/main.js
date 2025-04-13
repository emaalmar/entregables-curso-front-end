/*¿Qué es el Sliding Window?
La técnica de Sliding Window implica crear una ventana de tamaño fijo o variable que se mueve a través de un conjunto de datos (por ejemplo, un arreglo o cadena). La "ventana" es una porción específica del conjunto que se analiza. En lugar de recalcular desde cero cada vez, reutilizamos cálculos anteriores para optimizar la solución.

Ejemplo Visual

Supongamos que queremos encontrar la suma máxima de 3 números consecutivos en un arreglo:
[2, 1, 5, 1, 3, 2]
La técnica consiste en:

Calcular la suma inicial de los primeros 3 números.
Mover la ventana hacia adelante sumando el siguiente número y restando el primero.*/

/*Tipos de Sliding Window
El algoritmo de Sliding Window se clasifica en dos tipos principales: ventana fija y ventana variable. A continuación, se explica cada tipo en detalle con ejemplos claros para comprender cómo funcionan y cuándo se utilizan.

1. Ventana Fija
En una ventana fija, el tamaño de la ventana (el subconjunto de datos que estamos analizando) es constante durante toda la ejecución del algoritmo. Este tipo de técnica se utiliza cuando el problema requiere analizar un subconjunto de tamaño fijo dentro de una estructura más grande, como un arreglo o una cadena.

¿Cómo funciona?
1. Se inicia calculando el resultado para la primera ventana (por ejemplo, la suma de los primeros k elementos en un arreglo).

2. Luego, en cada paso, se "desliza" la ventana un elemento hacia adelante:

  - Se agrega el nuevo elemento (el que entra en la ventana).

  - Se elimina el elemento que queda fuera (el que sale de la ventana).

3. Esto permite reutilizar los cálculos previos en lugar de recomenzar desde cero, ahorrando tiempo.

Ejemplo: Encuentra la suma máxima de k números consecutivos

Queremos encontrar la suma más alta posible de 3 números consecutivos en un arreglo.*/

function maxSumaConsecutiva(arr, k) {
    let maxSuma = 0;
    let sumaActual = 0;

    // Paso 1: Calcula la suma inicial para los primeros 'k' elementos
    for (let i = 0; i < k; i++) {
        sumaActual += arr[i];
    }

    maxSuma = sumaActual;

    // Paso 2: Desliza la ventana a lo largo del arreglo
    for (let i = k; i < arr.length; i++) {
        sumaActual += arr[i] - arr[i - k]; // Agrega el nuevo elemento y elimina el primero
        maxSuma = Math.max(maxSuma, sumaActual); // Actualiza el máximo si es necesario
    }

    return maxSuma;
}

console.log(maxSumaConsecutiva([2, 1, 5, 1, 3, 2], 3)); // Resultado: 9
/*Explicación Paso a Paso

1. Inicialmente, se calcula la suma de [2, 1, 5] → suma = 8.

2. Luego, se desliza la ventana:

    - Quita 2 y agrega 1, lo que resulta en la nueva suma = 7.

    - Quita 1 y agrega 3, nueva suma = 9.

3. Continúa este proceso hasta cubrir todo el arreglo.*/

/*2. Ventana Variable
En una ventana variable, el tamaño de la ventana puede cambiar dinámicamente durante la ejecución del algoritmo, dependiendo de una condición específica. Esto es útil cuando se busca encontrar un subconjunto continuo que cumpla ciertas restricciones, como una suma objetivo, una cantidad de elementos únicos, o una secuencia válida.

¿Cómo funciona?

1. Se utiliza un puntero que marca el inicio de la ventana y otro que marca el final.

2. Se expande el final de la ventana (puntero derecho) hasta que la condición deseada se cumpla.

3. Cuando se cumple la condición, se intenta minimizar la ventana moviendo el inicio (puntero izquierdo) hacia adelante hasta que la condición deje de cumplirse.

4. Durante este proceso, se registra el resultado óptimo.

Ejemplo: Encuentra la subcadena más corta que tenga una suma mayor o igual a "target"

Queremos encontrar la longitud mínima de una subcadena en un arreglo que tenga una suma mayor o igual a "target".*/

function ventanaVariable(arr, target) {
    let sumaActual = 0, inicio = 0, longitudMinima = Infinity;

    // Expande el puntero derecho para recorrer el arreglo
    for (let fin = 0; fin < arr.length; fin++) {
        sumaActual += arr[fin];
        // Contrae la ventana desde el inicio cuando la suma cumple la condición
        while (sumaActual >= target) {
            longitudMinima = Math.min(longitudMinima, fin - inicio + 1);
            sumaActual -= arr[inicio];
            inicio++; // Mueve el inicio hacia adelante
        }
    }

    return longitudMinima === Infinity ? 0 : longitudMinima;
}

console.log(ventanaVariable([2, 3, 1, 2, 4, 3], 7)); // Resultado: 2

/*Explicación Paso a Paso

1. Inicialmente, se expande la ventana hacia la derecha hasta que la suma sea >= 7.

    - Subarreglo: [2, 3, 1, 2] → suma = 8.

2. Luego, se intenta reducir la ventana desde la izquierda para encontrar la longitud mínima.

    - Se elimina 2 → subarreglo: [3, 1, 2] → suma = 6.

    - Se repite este proceso para encontrar la ventana más pequeña que cumpla la condición.*/

