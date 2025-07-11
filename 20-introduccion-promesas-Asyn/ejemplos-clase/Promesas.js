/*Introducción a las Promesas
En JavaScript, una promesa es una forma de manejar operaciones asíncronas de manera más sencilla y estructurada. Las operaciones asíncronas son aquellas que no se ejecutan de manera inmediata, como una solicitud de red o la lectura de un archivo, sino que se ejecutan en segundo plano y cuando terminan, producen un resultado. Las promesas permiten que puedas escribir código más limpio y legible cuando trabajas con estas operaciones asíncronas.

Una promesa representa el valor que estará disponible en el futuro, ya sea porque la operación se haya completado correctamente (resuelta) o porque haya fallado (rechazada). De esta manera, puedes escribir tu código de manera que no se "bloquee" esperando el resultado de estas operaciones, sino que puedas seguir trabajando en otras cosas hasta que se obtenga el resultado.

¿Cómo funciona una Promesa?
Una promesa puede tener tres estados posibles:

Pendiente (Pending): Cuando la promesa se está ejecutando, pero aún no ha terminado.
Cumplida (Fulfilled): Cuando la operación se ha completado con éxito.
Rechazada (Rejected): Si la operación falla o se produce un error.*/
/*
Ejemplo de Promesa
Imagina que estás haciendo una solicitud a un servidor para obtener datos de un usuario. Al principio, la solicitud está pendiente. Si todo va bien, la promesa se cumple y obtienes los datos. Si algo sale mal, la promesa se rechaza y puedes manejar el error.*/

// Ejemplo de una promesa
let obtenerDatosDeUsuario = new Promise((resolve, reject) => {
    let exito = true; // Cambia esto para simular éxito o error

    if (exito) {
        resolve("Datos de usuario obtenidos correctamente.");
    } else {
        reject("Hubo un error al obtener los datos.");
    }
});

// Manejando el resultado de la promesa
obtenerDatosDeUsuario
    .then((resultado) => {
        console.log(resultado); // Si la promesa es cumplida
    })
    .catch((error) => {
        console.log(error); // Si la promesa es rechazada
    });

/*En este ejemplo, si la promesa se resuelve correctamente, se ejecutará el método.then(), mostrando el mensaje de éxito.Si ocurre un error, se ejecutará el método.catch(), mostrando el error.*/

/*Casos de uso en la vida real
En el mundo real, las promesas son útiles en situaciones como la conexión con bases de datos, la obtención de información de una API(como obtener la previsión del clima desde un servidor remoto), o incluso en aplicaciones de mensajería donde los mensajes se entregan en segundo plano.

Por ejemplo, imagina que una aplicación de compras en línea está solicitando información sobre el stock de un producto.La promesa sería la solicitud asíncrona al servidor, que se resolvería con la información de si el producto está disponible o no.Si la solicitud falla, por ejemplo, debido a un problema de red, la promesa sería rechazada y se podría mostrar un mensaje de error al usuario.*/

// Ejercicios de prática

/* A continuación te presento dos ejercicios prácticos sobre el uso de promesas.Cada ejercicio está acompañado de una explicación detallada sobre cómo funciona el código para que puedas incluirlo en la lectura.

    Ejercicio 1: Simulando una llamada a la API
Descripción: Este ejercicio simula una llamada a una API que puede ser exitosa o fallar.Utilizaremos promesas para simular la asincronía de la operación.

    Objetivo:
Usar promesas para simular una llamada a la API.
Manejar el éxito y el error de la promesa.
    Código:*/
// Función que simula una llamada a una API con éxito o error
function llamadaApi(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Datos obtenidos con éxito de la API.");
            } else {
                reject("Error al obtener los datos de la API.");
            }
        }, 2000);  // Simulamos un retraso de 2 segundos
    });
}

// Uso de la promesa
llamadaApi(true)  // Simula una llamada exitosa
    .then(result => {
        console.log(result);  // "Datos obtenidos con éxito de la API."
    })
    .catch(error => {
        console.error(error);  // Este bloque no se ejecuta en este caso
    });

// Uso con error
llamadaApi(false)  // Simula una llamada fallida
    .then(result => {
        console.log(result);  // Este bloque no se ejecuta en este caso
    })
    .catch(error => {
        console.error(error);  // "Error al obtener los datos de la API."
    });
/*Explicación:
1. Función llamadaApi(success): Esta función devuelve una promesa que simula una llamada a una API.Usa setTimeout para crear un retraso de 2 segundos, emulando el tiempo de espera para una respuesta de la API.

    - Si el parámetro success es true, la promesa se resuelve con el mensaje "Datos obtenidos con éxito de la API.".

    - Si success es false, la promesa se rechaza con el mensaje "Error al obtener los datos de la API.".

2. Uso de la promesa:

- Cuando llamamos a llamadaApi(true), la promesa se resuelve, y en el bloque.then() mostramos el mensaje de éxito.

    - Si llamamos a llamadaApi(false), la promesa se rechaza, y el mensaje de error se maneja en el bloque.catch().

Este ejercicio ayuda a entender cómo manejar el flujo asincrónico con promesas y cómo tratar los resultados con.then() y.catch().*/

/*    Ejercicio 2: Encadenamiento de Promesas
Descripción: Este ejercicio demuestra cómo se pueden encadenar promesas para realizar una serie de acciones de manera secuencial.

    Objetivo:
Encadenar promesas usando.then() para ejecutar múltiples tareas en orden.
Manipular los resultados de cada promesa dentro del encadenamiento.
    Código:*/
// Función que simula un proceso de registro
function registrarUsuario(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombre) {
                resolve(`Usuario ${nombre} registrado correctamente.`);
            } else {
                reject("El nombre de usuario es obligatorio.");
            }
        }, 1000);  // Retraso de 1 segundo
    });
}

// Función que simula enviar un correo de bienvenida
function enviarCorreoBienvenida(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Correo de bienvenida enviado a ${nombre}.`);
        }, 1500);  // Retraso de 1.5 segundos
    });
}

// Encadenamiento de promesas
registrarUsuario("Pedro")
    .then(result => {
        console.log(result);  // "Usuario Juan registrado correctamente."
        return enviarCorreoBienvenida("Juan");  // Encadenamos la siguiente promesa
    })
    .then(result => {
        console.log(result);  // "Correo de bienvenida enviado a Juan."
    })
    .catch(error => {
        console.error(error);  // En caso de error en alguna de las promesas
    });
/*Explicación:
1. Función registrarUsuario(nombre):

- Esta función devuelve una promesa que simula un registro de usuario.Si el nombre es proporcionado, la promesa se resuelve con un mensaje de éxito.Si el nombre no es proporcionado, la promesa se rechaza con un mensaje de error.

    - La promesa se resuelve después de 1 segundo(simulando un retraso).

2. Función enviarCorreoBienvenida(nombre):

- Esta función devuelve una promesa que simula el envío de un correo de bienvenida.Siempre resuelve la promesa con un mensaje de éxito después de 1.5 segundos.. 3. Encadenamiento de promesas:

- Llamamos a registrarUsuario("Juan") y usamos.then() para manejar el resultado.Si el registro es exitoso, se pasa el resultado a la siguiente promesa, enviarCorreoBienvenida().

    - Si alguna de las promesas en el encadenamiento falla, el bloque.catch() manejará el error.

Este ejercicio ilustra cómo encadenar promesas de manera efectiva, pasando datos entre promesas consecutivas y manejando los errores de manera global con.catch().

Ambos ejercicios son ejemplos prácticos para comprender el manejo básico de promesas en JavaScript:

El primer ejercicio muestra cómo manejar el éxito y el fracaso de una promesa.
El segundo ejercicio demuestra cómo encadenar varias promesas para realizar tareas secuenciales.
Estos ejemplos son útiles para entender cómo las promesas permiten manejar operaciones asincrónicas de manera más controlada y legible que las tradicionales callbacks.*/