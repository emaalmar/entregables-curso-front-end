/*
//-------------------- Selección de elementos---------------

// 1. document.getElementById(): Selecciona un elemento por su ID.
let titulo = document.getElementById('miTitulo');

// 2. document.getElementsByClassName(): Selecciona todos los elementos que tengan una clase específica.
let parrafos = document.getElementsByClassName('miClase');

// 3. document.getElementsByTagName(): Selecciona todos los elementos de un tipo específico (por ejemplo, todos los <p>).
let parrafos1 = document.getElementsByTagName('p');

// 4. document.querySelector(): Selecciona el primer elemento que coincide con un selector CSS.
let primerParrafo = document.querySelector('p');

// 5. document.querySelectorAll(): Selecciona todos los elementos que coinciden con un selector CSS.
let todosLosParrafos = document.querySelectorAll('p');
*/


/*
//------------------ Manipulación de elementos ------------------------

// 1. Cambiar el contenido de un elemento: Usando la propiedad innerHTML o textContent, podemos cambiar el contenido de un elemento.
let titulo = document.getElementById('miTitulo');
titulo.innerHTML = 'Nuevo Título';  // Cambia el contenido HTML

// 2. Cambiar los atributos de un elemento: Por ejemplo, podemos cambiar el atributo src de una imagen.
let imagen = document.getElementById('miImagen');
imagen.src = 'golden-perro.webp';  // Cambia la imagen

// 3. Cambiar el estilo de un elemento: Podemos modificar el estilo CSS de un elemento a través de la propiedad style.
let parrafo = document.getElementById('miParrafo');
parrafo.style.color = 'red';  // Cambia el color del texto a rojo
parrafo.style.fontSize = '20px';  // Cambia el tamaño de la fuente

// 4. Crear nuevos elementos: Usando JavaScript, podemos crear nuevos elementos HTML y añadirlos a la página.

let nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Este es un nuevo párrafo.';
document.body.appendChild(nuevoParrafo);  // Añade el nuevo párrafo al final del cuerpo (body)

// 5. Eliminar elementos: También podemos eliminar elementos del DOM.
let parrafo1 = document.getElementById('parrafoAEliminar');
parrafo.remove();  // Elimina el párrafo de la página

*/

/*
// ----------------- Casos de uso comunes del DOM --------------------------------

// 1. Formulario interactivo:
// Imagina que tienes un formulario en una página web, y quieres mostrar un mensaje cuando el usuario lo haya enviado correctamente.

// ---- html ----
let formulario = document.getElementById('miFormulario');
let mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();  // Previene que se recargue la página
    let nombre = document.getElementById('nombre').value;
    mensaje.innerHTML = '¡Gracias por enviar, ' + nombre + '!';
});

// Con JavaScript, puedes mostrar un mensaje cuando el formulario sea enviado:
// ---- javascript ----
let boton = document.getElementById('cambiarColor');

boton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
});
*/


// 2. Interactividad con botones
/*
// Un caso común es cambiar algo en la página al hacer clic en un botón. Por ejemplo, cambiar el color de fondo de la página:

// ---- html ----
<button id="cambiarColor">Cambiar Color</button>

// ---- javascript ----

<button id="mostrarOcultar"> Mostrar contenido</button>

<div id="contenido" style="display: none;">

    <p>Este es un contenido oculto.</p>

</div>
*/
/*
// 3. Mostrar u ocultar elementos

//Podemos mostrar o ocultar elementos dinámicamente con JavaScript.
// Supón que tienes un contenido que se oculta al principio
// y quieres mostrarlo cuando el usuario haga clic en un botón.

// ---- html ----
let boton = document.getElementById('mostrarOcultar');

let contenido = document.getElementById('contenido');

boton.addEventListener('click', function() {

    if (contenido.style.display === 'none') {

        contenido.style.display = 'block';  // Muestra el contenido

        boton.textContent = 'Ocultar contenido';

    } else {

        contenido.style.display = 'none';  // Oculta el contenido

        boton.textContent = 'Mostrar contenido';

    }

});

// ---- javascript ----
// {<button id="miBoton">Haz clic aquí</button>}
// <p id="miParrafo">Texto original.</p>
*/

// ----------------------- Manejo de Eventos con addEventListener --------------------------------------
/* En JavaScript, los eventos son acciones o sucesos que ocurren en el navegador, como hacer clic en un botón, mover el mouse sobre un elemento, presionar una tecla, entre otros. Para que nuestra página web responda a estos eventos, necesitamos "escuchar" 
los eventos y ejecutar una acción cuando estos ocurren.*/

//Sintaxis de addEventListener

//La sintaxis básica de addEventListener es la siguiente:
    //elemento.addEventListener('evento', función);

// -- Evento click --
// ---- html ----
/*<button id="miBoton">Haz clic aquí</button>
<p id="miParrafo">Texto original.</p> */

// En este ejemplo:

// Seleccionamos el botón con getElementById('miBoton') y el párrafo con getElementById('miParrafo').
// Usamos addEventListener para escuchar el evento 'click' en el botón.
// Cuando el usuario hace clic en el botón, se ejecuta la función anónima proporcionada, que cambia el texto del párrafo con parrafo.textContent = '¡Has hecho clic en el botón!'.


/*
// Ejericio 1: Cambiar el contenido de una página con un botón
let titulo = document.getElementById("cambiarTitulo");
let parrafo = document.getElementById("cambiarParrafo")
let boton = document.getElementById("cambiarBoton");

boton.addEventListener("click", function() {
    titulo.innerHTML = " ¡Bienvenido a mi página!";
    parrafo.innerHTML = "Este es el contenido inicial";
});

titulo.addEventListener("click", function() {
    titulo.innerHTML = " ¡Contenido actualizado!";
    parrafo.innerHTML = "El contenido ha sido cambiado";
});
*/

let parrafo = document.getElementById("cambiarParrafo");
let mensaje = document.getElementById('cambiarBoton');

mensaje.addEventListener('click', function() {

    if (parrafo.style.display === 'none') {
        parrafo.style.display = 'block';  // Muestra el contenido
        mensaje.textContent = 'Ocultar contenido';
    } else {
        parrafo.style.display = 'none';  // Oculta el contenido
        mensaje.textContent = 'Mostrar contenido';
    }
});