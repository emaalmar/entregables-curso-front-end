/* Hook useMemo en React
React es una biblioteca de JavaScript que permite construir interfaces de usuario(UI) interactivas de manera eficiente.Uno de los grandes retos al trabajar con aplicaciones web complejas es optimizar el rendimiento, es decir, hacer que las aplicaciones carguen rápido y se mantengan fluidas a medida que crecen en funcionalidad.En este contexto, React ofrece varios mecanismos para manejar estos problemas, y uno de ellos es el hook useMemo.

En esta lectura, exploraremos qué es useMemo, cómo funciona, y cómo podemos usarlo para mejorar el rendimiento de nuestras aplicaciones React.Este hook es particularmente útil cuando tienes operaciones costosas que no deben volver a ejecutarse en cada renderizado, sino solo cuando sea estrictamente necesario.

¿Qué es useMemo ?
    El hook useMemo es una función de React que te permite memorizar(o guardar) un valor calculado y evitar que se recalule innecesariamente en cada renderizado.En términos sencillos, useMemo recuerda el resultado de una operación y lo reutiliza en futuros renderizados si las dependencias no han cambiado.

¿Por qué es útil useMemo ?
    Cuando una aplicación crece y se vuelve más compleja, algunas operaciones pueden volverse costosas en términos de tiempo de procesamiento, como cálculos intensivos o llamadas a funciones que consumen muchos recursos.React, al renderizar de nuevo un componente debido a cambios en el estado o las props, ejecuta nuevamente todo el código dentro de ese componente, incluso si algunos de esos cálculos no han cambiado.

useMemo permite optimizar estos casos, guardando el resultado de una operación costosa y solo volviendo a calcularlo cuando sus dependencias(valores que influyen en el cálculo) cambian.Esto puede reducir significativamente el tiempo de renderizado, haciendo la aplicación más rápida y eficiente.

Sintaxis de useMemo
La sintaxis básica de useMemo es la siguiente:

const memorizedValue = useMemo(() => {

    // Cálculo costoso

    return value;

}, [dependencias]);

Cálculo costoso: Este es el valor o la operación que deseas memorizar.Puede ser cualquier operación que, al realizarse múltiples veces, consuma muchos recursos o tiempo de procesamiento.
    Dependencias: Esta es una lista de valores que, cuando cambian, harán que se recalcule el valor.Si ninguna de las dependencias cambia, React usará el valor memorizado en lugar de recalcularlo.
Ejemplo básico de useMemo
Supongamos que tenemos un componente que realiza un cálculo costoso para generar una lista de números grandes:

import React, { useMemo, useState } from 'react';

function ExpensiveCalculationComponent() {

    const [input, setInput] = useState(0);

    // Función costosa

    const expensiveCalculation = (num) => {

        console.log('Calculando...');

        let result = 0;

        for (let i = 0; i < 1000000000; i++) {

            result += num * i;

        }

        return result;

    };

    // Usamos useMemo para memorizar el resultado de la función costosa

    const memoizedResult = useMemo(() => expensiveCalculation(input), [input]);

    return (

        <div>

            <input

                type="number"

                value={input}

                onChange={(e) => setInput(parseInt(e.target.value))}

            />

            <p>Resultado memorizado: {memoizedResult}</p>

        </div>

    );

}
En este ejemplo, la función expensiveCalculation realiza un cálculo de tiempo largo.Usando useMemo, solo se recalculará el resultado cuando el valor de input cambie.Si el valor de input permanece igual entre renderizados, React usará el resultado memorizado, evitando la ejecución innecesaria de la función costosa.

Casos de uso de < code class="inline-code" > useMemo</ >
    1. Listas grandes o complejas: Si tienes una lista de elementos que necesita ser procesada, filtrada o transformada de alguna manera antes de mostrarse, puedes usar useMemo para almacenar los resultados de estos cálculos.Esto es útil cuando el filtrado o la transformación es costoso y no cambia con cada renderizado.Ejemplo:

const filteredList = useMemo(() => {

    return items.filter(item => item.active);

}, [items]);
2. Optimización de objetos y arrays: Cuando pasas objetos o arrays como props a componentes hijos, React puede renderizar de nuevo esos componentes si se detecta que las referencias de los objetos han cambiado, incluso si el contenido es el mismo.Usar useMemo ayuda a mantener la referencia constante si los valores no han cambiado.Ejemplo:

const memoizedObject = useMemo(() => ({ value: expensiveComputation() }), [])
3. Evitar recalculaciones en funciones: Si tienes una función que realiza un cálculo costoso y depende de un valor que cambia con el tiempo, useMemo puede ayudarte a evitar su recalculo innecesario entre renderizados.

Casos de uso en el mundo real
Ahora que entendemos cómo funciona useMemo desde un punto de vista técnico, veamos algunos ejemplos prácticos en el mundo real para ver cómo este hook puede mejorar el rendimiento de las aplicaciones.

Filtros en un sitio de comercio electrónico: Supongamos que tienes una tienda en línea con miles de productos y los usuarios pueden filtrar esos productos según varias categorías.Sin useMemo, cada vez que un usuario cambia un filtro, el navegador tendría que procesar todos los productos nuevamente.Usando useMemo, podemos evitar cálculos innecesarios y acelerar el proceso de filtrado.

Juegos de navegador o aplicaciones de simulación: En juegos o aplicaciones que simulan mundos virtuales, los cálculos de las posiciones de los objetos y su renderizado pueden ser muy costosos.Usar useMemo en estos casos puede garantizar que ciertos cálculos, como la posición de los objetos o los resultados de una simulación, solo se recalculen cuando sea necesario, mejorando la fluidez del juego.

Tablas de datos con cálculos intensivos: Si tienes una tabla con millones de filas de datos y realizas cálculos para mostrar estadísticas o resúmenes, useMemo puede memorizar esos cálculos y evitar la recálculo cada vez que se renderiza la tabla, mejorando la experiencia del usuario.

    Conclusión
El hook useMemo es una herramienta poderosa para optimizar el rendimiento de nuestras aplicaciones React, especialmente cuando tratamos con cálculos costosos o grandes cantidades de datos.Al memorizar valores y evitar cálculos innecesarios, podemos hacer que nuestras aplicaciones sean más rápidas y reactivas.Sin embargo, es importante recordar que no siempre es necesario usar useMemo.Si el costo de la operación es bajo o las actualizaciones son infrecuentes, es posible que no veas una mejora significativa en el rendimiento.

Al final, useMemo es un recurso que debe usarse con criterio, para evitar sobreoptimizar o hacer que el código se vuelva más complejo sin una verdadera mejora en el rendimiento. */