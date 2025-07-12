/* Introducción a React
1. ¿Qué es React ?
    React es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario interactivas y eficientes.Se basa en un modelo de componentes reutilizables que facilitan la creación de aplicaciones web escalables y mantenibles.

Una de sus principales ventajas es el uso del "Virtual DOM", que optimiza la actualización de la interfaz de usuario al minimizar los cambios en el DOM real, mejorando el rendimiento de la aplicación.

    Ejemplo: */

/* import React from 'react';

function Saludo() {
    return <h1>¡Hola, mundo!</h1>;
}

export default Saludo; */

/* Este pequeño componente de React muestra un encabezado con el texto "¡Hola, mundo!".

2. Creación de un Proyecto de React con Vite
Vite es una herramienta moderna para crear proyectos de JavaScript que mejora la velocidad de desarrollo.Su compatibilidad con React lo convierte en una excelente alternativa a create - react - app.

Pasos para crear un proyecto con Vite:
1. Instalar Node.js: Antes de empezar, asegúrate de tener Node.js instalado en tu computadora.

2. Crear el proyecto usando el siguiente comando en la terminal: */

npm create vite @latest mi - proyecto - react --template react

/* 3. Instalar dependencias: */

// cd mi - proyecto - react
// npm install

/* 4. Ejecutar el proyecto: */

// npm run dev

/* Esto iniciará un servidor de desarrollo y podrás ver tu aplicación en el navegador en http://localhost:5173/. */


/* 3. Componentes en React
Los componentes son la base de React.Un componente es una función de JavaScript que devuelve un elemento JSX(JavaScript XML) para ser mostrado en la interfaz.

Existen dos tipos de componentes principales:

Componentes funcionales(basados en funciones)

Componentes de clase(basados en clases, aunque su uso ha disminuido en favor de los funcionales con Hooks)

Ejemplo de un componente funcional: */

// function Boton() {
//     return <button>Haz clic aquí</button>;
// }

/* 4. JSX: JavaScript XML
JSX es una extensión de JavaScript que permite escribir código similar a HTML dentro de los archivos de React.Aunque parece HTML, JSX es interpretado por React y transformado en llamadas a React.createElement().Lo cual es código JavaScript.

Ejemplo:*/

// const mensaje = <h1>Bienvenido a React</h1>;

/* Dado que JSX es JavaScript, podemos usar variables y expresiones dentro de él: */

// const nombre = "Carlos";

// const saludo = <h1>Hola, {nombre}!</h1>;

/* 5. Estados y Props
Los estados(state) y las propiedades(props) permiten manejar datos en React.

    Props: Son datos que se pasan de un componente padre a un hijo.
        State: Es un objeto interno del componente que almacena información que puede cambiar con el tiempo.
Ejemplo de props: */

// function Usuario(props) {
//     return <h1>Hola, {props.nombre}!</h1>;
// }
/* <Usuario nombre="Ana" />*/

/* Ejemplo de state con useState: */
/* import { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>Valor: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    );
} */

/* 6. Casos de Uso en el Mundo Real
React se usa ampliamente en aplicaciones del mundo real.Algunos ejemplos incluyen:

Redes Sociales: Facebook, Instagram y Twitter usan React para sus interfaces.
Aplicaciones de comercio electrónico: Amazon y Mercado Libre utilizan React para mejorar la experiencia del usuario.
Sistemas de gestión: Herramientas como Trello y Asana facilitan la organización de tareas mediante interfaces construidas en React.
Aplicaciones personales: React también se usa en sitios web personales, blogs y portafolios. */