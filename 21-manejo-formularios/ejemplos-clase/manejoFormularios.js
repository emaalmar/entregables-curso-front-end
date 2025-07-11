/* Manejo de Formularios con JavaScript
El manejo de formularios es una de las habilidades fundamentales para cualquier desarrollador web, ya que los formularios permiten la interacción entre los usuarios y las aplicaciones. Aprender a manejar formularios no solo implica entender el HTML que los define, sino también saber cómo capturar, validar y procesar los datos que los usuarios introducen.

Estructura Básica de un Formulario en HTML
Un formulario en HTML es un conjunto de campos de entrada que permite a los usuarios proporcionar información. Los campos comunes incluyen cajas de texto (input), áreas de texto (textarea), casillas de verificación (checkboxes), botones de radio (radio buttons) y menús desplegables (select). */

/*<form id="myForm">
  <label for="name">Nombre:</label>
  <input type="text" id="name" name="name">
  <label for="email">Correo Electrónico:</label>
  <input type="email" id="email" name="email">
  <button type="submit">Enviar</button>
</form>*/

/* Explicación
form  : Define el formulario.
label : Proporciona una descripción para cada campo de entrada.
input : Define un campo donde los usuarios pueden ingresar datos.
button: Es el botón para enviar el formulario.
Captura de Datos con JavaScript
El primer paso para manejar un formulario con JavaScript es capturar los datos que el usuario introduce. Esto se logra mediante eventos como submit o change. */

const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Previene el envío automático del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    console.log(`Nombre: ${name}, Correo: ${email}`);
});

/* Explicación
event.preventDefault(): Detiene el comportamiento por defecto del formulario, que es recargar la página.
.value: Obtiene el valor ingresado por el usuario en un campo*/

// Validación de Datos
/* La validación asegura que los datos ingresados cumplan ciertos criterios antes de ser enviados.Esto puede ser tanto del lado del cliente(JavaScript) como del servidor. */

// Ejemplo de Validación
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    if (!email.includes('@')) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    alert('Formulario enviado correctamente.');
});

/* Explicación
includes('@'): Verifica si el correo contiene el símbolo @.
    alert(): Muestra un mensaje al usuario. */

/* Envío de Datos
Una vez que los datos han sido validados, pueden enviarse a un servidor mediante tecnologías como fetch o XMLHttpRequest.

Ejemplo de Envío */
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };

    fetch('https://api.ejemplo.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log('Datos enviados:', data))
        .catch(error => console.error('Error:', error));

});

/* Explicación
fetch: Permite realizar solicitudes HTTP.
    JSON.stringify(): Convierte los datos a formato JSON para enviarlos al servidor. */

/* Casos de Uso en el Mundo Real
Registro en Plataformas Online: Al registrarse en un sitio como una red social, los usuarios llenan un formulario con datos como su nombre, correo y contraseña.
Encuestas y Opiniones: Formularios para recopilar opiniones de clientes o encuestas de satisfacción.
Carritos de Compra: En sitios de comercio electrónico, los formularios se usan para procesar direcciones de envío y métodos de pago.
    Reservaciones: Reservar boletos de avión, habitaciones de hotel o citas médicas.
        Conclusión
El manejo de formularios es una habilidad esencial para cualquier desarrollador web.Implica no solo capturar y validar datos, sino también garantizar una experiencia de usuario fluida y segura.Dominar estos conceptos te prepara para trabajar en proyectos interactivos y conectados a servicios en línea. */