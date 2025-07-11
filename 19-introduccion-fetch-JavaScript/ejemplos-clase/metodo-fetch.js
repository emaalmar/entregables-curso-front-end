/* ¿Qué es el método fetch?
fetch es una función integrada en JavaScript que permite realizar solicitudes HTTP de forma asíncrona. Es una alternativa moderna a XMLHttpRequest y está diseñada para ser más intuitiva y fácil de usar. Una de sus características principales es que devuelve una promesa, lo que significa que podemos manejar las respuestas de manera elegante con .then() y catch() o usando async/await. */


/* // Ejemplo sencillo
fetch('https://api.example.com/data')

    .then(response => response.json())

    .then(data => console.log(data))

    .catch(error => console.error('Error:', error)); */

// Características principales de Fetch

/* 1. Devuelve Promesas
fetch devuelve una promesa que se resuelve cuando la solicitud completa su curso.Esto hace que sea ideal para manejar operaciones asíncronas. */

    // fetch('https://api.example.com')

    // .then(response => console.log('Solicitud exitosa'))

    // .catch(error => console.error('Hubo un problema:', error));

/* 2. Soporte para diferentes tipos de solicitudes
Con fetch, puedes realizar solicitudes GET, POST, PUT, DELETE, entre otras.Esto lo hace versátil para interactuar con APIs RESTful. */

    // fetch('https://api.example.com/addData', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ nombre: 'Juan', edad: 30 })
    // })
    // .then(response => response.json())
    // .then(data => console.log('Data enviada:', data))
    // .catch(error => console.error('Error:', error));

// En este ejemplo, se envían datos al servidor mediante una solicitud POST.

/* 3. Manejo de Errores
Aunque fetch es poderoso, no lanza errores automáticamente si la respuesta tiene un código de estado como 404 o 500. Es importante verificar manualmente el estado de la respuesta. */

    // fetch('https://api.example.com/data')
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //     }

    //     return response.json();
    // })
    // .then(data => console.log(data))
    // .catch(error => console.error('Error en la solicitud:', error));
// Casos de Uso en el Mundo Real
// 1. Consultar APIs de Clima
// Un ejemplo común es obtener información meteorológica.

    // fetch('https://api.weatherapi.com/v1/current.json?key=tuClave&q=Mexico')

    // .then(response => response.json())

    // .then(data => console.log('Clima actual:', data))

    // .catch(error => console.error('Error al obtener el clima:', error));

// 2. Formulario de Contacto
// Puedes usar fetch para enviar datos de un formulario a un servidor.

    // fetch('https://api.example.com/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         nombre: 'Ana',
    //         mensaje: 'Hola, me interesa su servicio'
    //     })
    // })
    // .then(response => response.json())
    // .then(data => console.log('Formulario enviado:', data))
    // .catch(error => console.error('Error al enviar el formulario:', error));

// 3. Galería Dinámica
// Carga imágenes desde una API para una galería web.

    // fetch('https://api.unsplash.com/photos?client_id=tuClave')
    // .then(response => response.json())
    // .then(images => {
    //     images.forEach(image => {
    //         const img = document.createElement('img');
    //         img.src = image.urls.small;
    //         document.body.appendChild(img);
    //     });
    // })
    // .catch(error => console.error('Error al cargar imágenes:', error));

    