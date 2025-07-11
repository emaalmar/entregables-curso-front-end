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

/*Campos de Formularios Comunes en HTML5
HTML5 introdujo una variedad de nuevos tipos de campos de entrada que mejoran la experiencia del usuario y facilitan el manejo de formularios. Además de los campos básicos como texto y contraseñas, es importante conocer otros elementos como checkboxes, botones de radio, listas desplegables y más.*/

/*Casillas de Verificación (Checkbox)
Las casillas de verificación permiten a los usuarios seleccionar una o varias opciones de un conjunto.*/

/*Ejemplo
<form>
  <label>
    <input type="checkbox" name="intereses" value="deportes"> Deportes
  </label>
  <label>
    <input type="checkbox" name="intereses" value="música"> Música
  </label>
  <label>
    <input type="checkbox" name="intereses" value="arte"> Arte
  </label>
</form>
*/

/*Explicación
type="checkbox": Define una casilla de verificación.
name: Agrupa los valores de las opciones bajo un mismo nombre.
value: Especifica el valor asociado a la opción seleccionada.
En JavaScript, se puede verificar si una casilla está marcada usando la propiedad .checked.*/

const checkbox = document.querySelector('input[type="checkbox"]');
console.log(checkbox.checked); // true o false

/*Botones de Radio (Radio Buttons)
Los botones de radio permiten a los usuarios seleccionar una única opción de un conjunto.

Ejemplo*/
/*
<form>
  <label>
    <input type="radio" name="genero" value="masculino"> Masculino
  </label>
  <label>
    <input type="radio" name="genero" value="femenino"> Femenino
  </label>
  <label>
    <input type="radio" name="genero" value="otro"> Otro
  </label>
</form>
*/

/*Explicación
type="radio": Define un botón de radio.
name: Garantiza que solo un botón dentro del grupo pueda ser seleccionado a la vez.
Para obtener el valor seleccionado:*/

const selectedRadio = document.querySelector('input[name="genero"]:checked');
console.log(selectedRadio.value); // "masculino", "femenino" o "otro"

/*Menús Desplegables (Select)
Los menús desplegables (select) permiten a los usuarios elegir una opción de una lista.
Ejemplo*/

/*<form>
  <label for="ciudad">Ciudad:</label>
  <select id="ciudad" name="ciudad">
    <option value="cdmx">Ciudad de México</option>
    <option value="guadalajara">Guadalajara</option>
    <option value="monterrey">Monterrey</option>
  </select>
</form>*/

/*Explicación
<select>: Crea el menú desplegable.
<option>: Define las opciones dentro del menú.
value: Especifica el valor que se enviará al servidor cuando se seleccione la opción.
Para capturar la opción seleccionada:*/

const ciudad = document.getElementById('ciudad');
console.log(ciudad.value); // Valor de la opción seleccionada

/*Campos de Fecha y Hora
HTML5 introdujo campos específicos para capturar fechas y horas, facilitando la entrada y validación.
Ejemplo*/

/*<form>
  <label for="fecha">Fecha de nacimiento:</label>
  <input type="date" id="fecha" name="fecha">
  <label for="hora">Hora de la cita:</label>
  <input type="time" id="hora" name="hora">
</form>**/

/* Explicación
type="date": Crea un selector de fechas.
type="time": Crea un selector de horas.
Los valores pueden capturarse así: */

const fecha = document.getElementById('fecha').value;
const hora = document.getElementById('hora').value;
console.log(`Fecha: ${fecha}, Hora: ${hora}`);

/* Campos de Archivo
Permiten a los usuarios cargar archivos desde su dispositivo.
Ejemplo */

/*<form>

  <label for="archivo">Sube un archivo:</label>

  <input type="file" id="archivo" name="archivo">

</form>*/

/*Explicación
type="file": Permite al usuario seleccionar archivos.
Se puede acceder al archivo cargado a través de la propiedad files:*/

const archivo = document.getElementById('archivo').files[0];
console.log(archivo.name); // Nombre del archivo

/* Casos de Uso en el Mundo Real
Formularios de Registro: Seleccionar género con botones de radio o intereses con checkboxes.
Compra de Boletos: Usar menús desplegables para elegir fechas o asientos.
Citas Médicas: Seleccionar fecha y hora con campos de tipo date y time.
Carga de Documentos: Enviar archivos como currículums o fotos en formularios de empleo.
Conclusión
Los campos de formulario avanzados permiten crear experiencias de usuario intuitivas y eficientes. Saber cómo usarlos y manejarlos con JavaScript es esencial para el desarrollo web moderno. Continúa explorando y practicando para dominar estas herramientas. */