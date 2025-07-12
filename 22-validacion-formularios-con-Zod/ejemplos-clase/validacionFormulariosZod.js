/*Validación de formularios con Zod
Introducción a la Validación de Datos
La validación de datos es una parte esencial del desarrollo web. Garantizar que los datos ingresados por los usuarios en un formulario sean válidos previene errores, asegura la calidad de la información y protege la integridad de los sistemas. Sin validación, los formularios pueden recibir datos incorrectos, incompletos o incluso maliciosos, lo que podría afectar negativamente al sistema.

Para facilitar la validación de datos en aplicaciones JavaScript, existen bibliotecas como Zod, que permiten definir y validar esquemas de datos de manera sencilla y estructurada. En esta lectura, exploraremos cómo usar Zod para validar formularios y sus datos.

¿Qué es Zod?
Zod es una biblioteca de validación de esquemas para JavaScript y TypeScript. Su principal objetivo es definir cómo debería lucir un conjunto de datos y luego validarlos automáticamente. Zod permite trabajar con objetos, cadenas, números, fechas y más, proporcionando una manera clara y funcional de manejar validaciones.

Instalación
Primero, debes instalar Zod en tu proyecto. Si usas npm o yarn, puedes hacerlo con:

npm install zod
Una vez instalado, puedes importarlo en tu proyecto:*/

import { z } from 'zod';

/*Definición de Esquemas Básicos
Un esquema en Zod define las reglas que deben cumplir los datos. Por ejemplo, si necesitas validar un nombre y una edad, puedes definir un esquema básico así:*/

const schema = z.object({

  name: z.string().min(1, "El nombre es obligatorio"),

  age: z.number().int().positive("La edad debe ser un número positivo"),

});

/* z.string(): Define que el valor debe ser una cadena.
z.number(): Define que el valor debe ser un número.
min(1): Especifica que la cadena debe tener al menos 1 carácter.
int(): Asegura que el número sea un entero.
positive(): Valida que el número sea positivo. */

/* Validación
Puedes validar datos con el método parse: */

try {
  schema.parse({ name: "Juan", age: 25 });
  console.log("Datos válidos");
} catch (error) {
  console.error(error.errors);
}

/*Si los datos son válidos, se ejecutará el bloque try. Si hay errores, se capturarán en el bloque catch.

Validación de Formularios
Cuando trabajamos con formularios HTML, Zod es una herramienta poderosa para validar los datos ingresados. Por ejemplo, supongamos que tenemos un formulario con campos para nombre, correo electrónico y edad.*/

/*Formulario HTML
<form id="userForm">
  <input type="text" id="name" placeholder="Nombre" required />
  <input type="email" id="email" placeholder="Correo electrónico" required />
  <input type="number" id="age" placeholder="Edad" required />
  <button type="submit">Enviar</button>
</form>
Validación con Zod
Enlazamos el formulario con un esquema en Zod para validar los datos:*/

const userSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Correo electrónico inválido"),
  age: z.number().int().positive("La edad debe ser un número positivo"),
});

document.getElementById("userForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    age: Number(document.getElementById("age").value),
  };

  try {
    userSchema.parse(formData);
    alert("Formulario enviado correctamente");
  } catch (error) {
    alert(`Errores: ${error.errors.map(e => e.message).join(", ")}`);
  }
});


/*Casos de Uso en el Mundo Real
Registro de Usuarios
Un formulario de registro que valide nombre, correo electrónico, contraseña y confirmación de contraseña.

Encuestas
En aplicaciones de encuestas, puedes validar que los usuarios seleccionen al menos una respuesta o ingresen comentarios con una longitud mínima.

Reservaciones
En sistemas de reservación de citas o vuelos, puedes asegurarte de que la fecha y hora sean válidas y que los datos de contacto estén completos.

Formularios de Contacto
Validar que el nombre y el mensaje tengan contenido suficiente, así como que el correo electrónico sea válido.

Conclusión
La validación de datos con Zod es una manera efectiva y estructurada de manejar entradas de usuarios en formularios. Define esquemas claros, valida datos fácilmente y mejora la experiencia del usuario al proporcionar mensajes de error significativos. Al practicar con Zod, estarás mejor preparado para manejar formularios y datos en tus proyectos.*/