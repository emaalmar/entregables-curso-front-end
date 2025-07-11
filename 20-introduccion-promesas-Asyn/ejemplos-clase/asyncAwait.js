/* Introducción a Async / Await
async y await son dos palabras clave en JavaScript que hacen que trabajar con código asíncrono sea aún más sencillo y legible.Estas palabras clave son una mejora de las promesas y ofrecen una sintaxis más cercana a la “programación síncrona”, lo que hace que el código sea más fácil de entender y mantener.

    async: Se usa para declarar una función que siempre devolverá una promesa.Incluso si dentro de esa función no estás usando promesas directamente, JavaScript la convierte en una promesa.
        await: Se usa dentro de una función async para esperar a que una promesa se resuelva o se rechace antes de continuar con la ejecución del código.Cuando se utiliza await, JavaScript pausa la ejecución de la función hasta que la promesa se resuelva, sin bloquear el hilo principal de ejecución.
¿Cómo funciona Async / Await ?
    La principal ventaja de async / await sobre las promesas tradicionales es que hace que el código asíncrono se vea y se comporte de una manera más secuencial, como si fuera código síncrono.Esto mejora la legibilidad y reduce la complejidad del código, eliminando la necesidad de encadenar múltiples.then() y.catch().

Ejemplo de Async / Await
Imagina que necesitas obtener información de varios usuarios desde un servidor.Usando async / await, puedes escribir el código de forma más lineal y fácil de seguir. */

// Simulando una solicitud asíncrona con promesas
function obtenerDatosDeUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nombre: 'Juan' });
            } else {
                reject('Usuario no encontrado');
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
}

// Usando async/await
async function mostrarDatosDeUsuario(id) {
    try {
        const usuario = await obtenerDatosDeUsuario(id); // Espera a que la promesa se resuelva
        console.log(usuario); // Muestra los datos del usuario
    } catch (error) {
        console.log(error); // Maneja el error si la promesa es rechazada
    }
}

// Uso:
mostrarDatosDeUsuario(1); // Muestra los datos del usuario con id 1

/*En este código, la función mostrarDatosDeUsuario es async, lo que significa que siempre devuelve una promesa.Dentro de esta función, usamos await para esperar la resolución de la promesa obtenerDatosDeUsuario(id).Si la promesa se resuelve, el valor se asigna a usuario y se muestra en consola.Si la promesa es rechazada, el error se captura con catch y se muestra en consola.

Manejo de Errores con try/catch en async/await
Introducción al manejo de errores
Cuando trabajamos con operaciones asíncronas, es crucial manejar los errores adecuadamente para evitar que la aplicación se caiga o muestre resultados incorrectos.Las funciones async y el operador await facilitan el trabajo con promesas, pero el manejo de errores sigue siendo una parte importante del proceso.

En código tradicional basado en promesas, se usan los métodos.catch() para manejar los errores.Sin embargo, cuando utilizamos async / await, el manejo de errores se puede hacer de manera más limpia y comprensible utilizando el bloque try/catch.*/

/*¿Cómo funciona el manejo de errores con try/catch?
El bloque try/catch es una estructura que nos permite capturar excepciones (errores) en JavaScript. Dentro de una función async, si ocurre un error durante la ejecución de una promesa que estamos esperando con await, podemos capturarlo y manejarlo con catch, de una manera mucho más sencilla y organizada que con las promesas tradicionales.

Sintaxis básica:*/
async function obtenerDatos() {
    try {
        let respuesta = await fetch('https://api.example.com');
        let datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.log('Error al obtener los datos:', error);
    }
}
/* try: Contiene el código que se ejecuta de manera normal.En el caso de async / await, puede contener una o más promesas que se esperan con await.
catch: Si alguna promesa dentro del bloque try falla, se pasa al bloque catch y el error es manejado. */

// Ejemplo de un error de red(como fetch fallando)
/* En el ejemplo anterior, si la solicitud fetch falla(por ejemplo, si hay un problema de red o si la URL no existe), el flujo de control pasará automáticamente al bloque catch, donde el error será capturado e impreso.

Ejemplo con error: */
async function obtenerDatos() {
    try {
        let respuesta = await fetch('https://api.inexistente.com'); // Esta URL no existe
        let datos = await respuesta.json(); // Esto nunca se ejecutará
        console.log(datos);
    } catch (error) {
        console.log('Hubo un problema:', error); // Aquí se maneja el error
    }
}

obtenerDatos();
/* Resultado esperado: El error será capturado por el bloque catch y se imprimirá en la consola el mensaje "Hubo un problema: ...", proporcionando información sobre el tipo de error(en este caso, un error de red o un error de HTTP). */

// ¿Por qué es importante usar try/catch?

/* Si no se usa try/catch para capturar los errores, cualquier fallo en una operación await provocaría que la función async falle y se cierre, y el error podría propagarse, deteniendo la ejecución del resto del código de forma inesperada. Además, el manejo adecuado de los errores permite que la aplicación siga funcionando de manera predecible y se pueda informar al usuario de los problemas de forma clara.

Casos de uso en la vida real de async / await
Un caso de uso común es la obtención de datos de una API de una red social.Imagina que tienes una aplicación que necesita obtener información de varias fuentes(usuarios, publicaciones, comentarios, etc.).Usando async / await, puedes hacer que cada solicitud de API se ejecute de manera secuencial o en paralelo(según sea necesario) sin que tu código se vuelva complicado o difícil de seguir.

Por ejemplo, en una aplicación de gestión de proyectos, puedes utilizar async / await para cargar las tareas de un proyecto desde un servidor y mostrar los resultados a los usuarios de manera eficiente.El uso de await garantiza que el flujo de trabajo del proyecto no se vea interrumpido mientras esperas que los datos se descarguen. */