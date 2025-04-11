// Acceder al Nombre de la Etiqueta: nodeName

const element1 = document.querySelector(".container");
console.log(element1.nodeName); // "DIV"

// Modificar Contenido de Texto con .textContent

const element = document.querySelector(".message");
console.log(element.textContent); // "Mi nombre es Manz."
element.textContent = "Hola a todos";
console.log(element.textContent); // "Hola a todos"

// Acceso al Texto Renderizado con .innerText
const element2 = document.querySelector(".container1");
console.log(element2.textContent);
console.log(element2.innerText);
// "Hola a todos.
// Me llamo Manz.

// Reemplazo del Elemento con .outerText
const element3 = document.querySelector(".container2");
element3.innerText = "Hola";
// <section><div class="container">Hola</div></section>

element3.outerText = "Adiós";
// <section>Adiós</section>


//Insertar contenido HTML

const element4 = document.querySelector(".container");
element4.innerHTML = "<h1>Hola</h1>";
// Renderiza un encabezado <h1> con el texto "Hola".




// ------------------------------------------ Practica -------------------------------------------
// Cambiar texto de párrafo oculto
const hiddenElement = document.querySelector(".hidden");
hiddenElement.textContent = "Texto revelado";
hiddenElement.style.display = "block";

  // Mostrar texto visible
const container = document.querySelector(".container");
console.log(container.innerText);

  // Reemplazar etiqueta completa
const replaceElement = document.querySelector(".replace");
replaceElement.outerText = "Etiqueta reemplazada";



// -------------------------------------- ACCEDER A CLASES CSS -----------------------------------------



const element = document.querySelector("#page");

// Obtener la lista de clases
console.log(element.classList);              // ["info", "data", "dark"]
console.log(element.classList.value);        // "info data dark"
console.log(element.classList.length);       // 3

// Convertir a array
console.log(Array.from(element.classList));  // ["info", "data", "dark"]
console.log([...element.classList]);         // ["info", "data", "dark"]

// Acceder a una clase específica
console.log(element.classList.item(0));      // "info"
console.log(element.classList.item(1));      // "data"
console.log(element.classList.item(3));

//------------------------------- Añadir y eliminar clases CSS --------------------------

const element1 = document.querySelector("#page1");

// Añadir clases
element1.classList.add("highlight", "selected");
console.log(element1.classList);  // ["info", "data", "dark", "highlight", "selected"]

// Eliminar clases
element1.classList.remove("highlight", "selected");
console.log(element1.classList);  // ["info", "data", "dark"]

// ----------------------------- Comprobar si existen clases CSS ----------------------------------
const element2 = document.querySelector("#page3");

console.log(element2.classList.contains("info"));    // true (existe "info")
console.log(element2.classList.contains("hidden"));  // false (no existe "hidden")

// -------------------------------------- Alternar clases CSS -------------------------------------
const element3 = document.querySelector("#page");

// Alternar clases
console.log(element3.classList.toggle("info")); // false (la elimina)
console.log(element3.classList);                // ["data", "dark"]

console.log(element3.classList.toggle("info")); // true (la añade de nuevo)
console.log(element3.classList);                // ["info", "data", "dark"]

// ---------------------------------------- Reemplazar una clase CSS ---------------------------------

const element4 = document.querySelector("#page5");

// Reemplazar clases
console.log(element4.classList.replace("dark", "light")); // true (cambio exitoso)
console.log(element4.classList);                          // ["info", "data", "light"]

console.log(element4.classList.replace("hidden", "error")); // false (no existe "hidden")
console.log(element4.classList);                           // ["info", "data", "light"]

