/* ¿Qué es Axios ?
    Axios es una biblioteca basada en promesas que facilita las interacciones con servidores web.Se puede usar tanto en el navegador como en entornos Node.js.Su sintaxis limpia y capacidades avanzadas lo convierten en una excelente opción para manejar solicitudes HTTP.
 */
/* Ventajas de Axios:
Soporte para solicitudes asíncronas.
Transformación automática de JSON.
Configuración de cabeceras HTTP personalizada.
Manejo de errores mejorado.
Compatible con navegadores antiguos.*/

// Ejemplo sencillo:

/* axios.get('https://api.example.com/data')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error al obtener datos:', error);
    }); */

    // En este ejemplo, se utiliza axios.get para realizar una solicitud HTTP GET y manejar los resultados o errores con promesas.

// Instalación de Axios

// Puedes instalar Axios en un proyecto con Node.js o incluirlo en el navegador mediante una CDN.

/* Instalación con npm:

npm install axios */

/* Uso con una CDN:
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> */

// Realizando Solicitudes con Axios

// Axios permite realizar distintos tipos de solicitudes HTTP como GET, POST, PUT y DELETE.

// Solicitud GET:
/* axios.get('https://api.example.com/users')

    .then(response => console.log(response.data))

    .catch(error => console.error(error)); */

// Solicitud POST:

/* axios.post('https://api.example.com/users', {
    name: 'John Doe',
    email: 'john.doe@example.com'
})
    .then(response => console.log(response.data))
    .catch(error => console.error(error)); */

// El método POST se utiliza para enviar datos al servidor, como al registrar un nuevo usuario.

// Configuración Avanzada
// Una de las mayores fortalezas de Axios es su capacidad de configuración avanzada. Puedes establecer configuraciones globales o personalizadas por solicitud.

// Ejemplo de configuración global:

/* axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = 'Bearer token'; */

// Estableciendo un tiempo de espera:
/*
axios.get('https://api.example.com/data', { timeout: 5000 })

    .then(response => console.log(response.data))

    .catch(error => console.error('Timeout:', error)); */

/* Manejo de Errores
Axios ofrece una forma estructurada para manejar errores, diferenciando entre errores de red, errores de código de estado HTTP y problemas en la configuración de la solicitud. */

// Ejemplo de manejo de errores:

/* axios.get('https://api.example.com/data')
    .then(response => console.log(response.data))
    .catch(error => {
        if (error.response) {
            console.error('Error del servidor:', error.response.status);
        } else if (error.request) {
            console.error('No hubo respuesta del servidor:', error.request);
        } else {
            console.error('Error al configurar la solicitud:', error.message);
        }
    });
     */
// Casos de Uso en el Mundo Real

// 1. Consumo de APIs de Clima
// Una aplicación que muestra el clima local puede usar Axios para obtener datos de una API como OpenWeatherMap:

axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=tu_api_key')

    .then(response => console.log(response.data))

    .catch(error => console.error(error));
// 2. Envío de Formularios
// Al enviar un formulario de contacto, puedes usar una solicitud POST:

axios.post('https://api.example.com/contact', {
    name: 'Jane Doe',
    message: 'Hola, me interesa su producto.'
})
    .then(response => console.log('Mensaje enviado:', response.data))
    .catch(error => console.error(error));
// 3. Aplicaciones en Tiempo Real
// Axios puede integrarse con servidores para obtener datos en tiempo real, como en sistemas de seguimiento de entregas.