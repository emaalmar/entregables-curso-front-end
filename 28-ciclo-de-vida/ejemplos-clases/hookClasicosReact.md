Hooks clásicos en React
Desde la introducción de React Hooks en la versión 16.8, la forma en que escribimos componentes en React cambió drásticamente. Los Hooks nos permiten usar el estado y otras características de React en componentes funcionales, lo que antes solo era posible en componentes de clase. Además de los Hooks más comunes como useState y useEffect, existen otros Hooks clásicos que son fundamentales para el desarrollo en React. En esta lectura, exploraremos en detalle algunos de los Hooks clásicos más importantes y cómo utilizarlos para construir aplicaciones React robustas y eficientes.

¿Qué son los Hooks en React?
Los Hooks son funciones especiales que nos permiten "engancharnos" a las características de React, como el estado y el ciclo de vida, desde componentes funcionales. Los Hooks nos permiten escribir código más reutilizable, legible y fácil de mantener. Además, los Hooks nos ayudan a evitar la complejidad y los problemas que a menudo se asocian con los componentes de clase.

Hooks clásicos en React
useState: El Hook useState es uno de los Hooks más básicos y esenciales en React. Nos permite agregar estado a componentes funcionales. El estado es una forma de almacenar y actualizar datos que pueden afectar la forma en que se renderiza un componente.

import React, { useState } from 'react';

function MyComponent() {

  const [count, setCount] = useState(0);

  return (

    <div>

      <p>Contador: {count}</p>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>

    </div>

  );

}
En este ejemplo, useState(0) inicializa el estado con el valor 0 y devuelve un array con dos elementos: el valor actual del estado (count) y una función para actualizar el estado (setCount).


useEffect: El Hook useEffect nos permite realizar efectos secundarios en componentes funcionales. Los efectos secundarios son acciones que no están directamente relacionadas con la representación del componente, como realizar solicitudes de datos, suscribirse a eventos o manipular el DOM.

import React, { useState, useEffect } from 'react';

function MyComponent() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log('El componente se ha renderizado');

  }, [count]);

  return (

    <div>

      <p>Contador: {count}</p>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>

    </div>

  );

}
En este ejemplo, useEffect se ejecuta después de cada renderizado del componente. El array de dependencias [count] indica que el efecto solo debe ejecutarse si el valor de count cambia.


useContext: El Hook useContext nos permite acceder al contexto de React desde componentes funcionales. El contexto es una forma de compartir datos entre componentes sin tener que pasar props manualmente a través de la jerarquía de componentes.

import React, { useContext } from 'react';

const MyContext = React.createContext();

function MyComponent() {

  const value = useContext(MyContext);

  return (

    <div>

      <p>Valor del contexto: {value}</p>

    </div>

  );

}
En este ejemplo, useContext(MyContext) nos da acceso al valor actual del contexto MyContext.

Casos de uso en el mundo real
useState: Se utiliza para manejar el estado de componentes, como el texto de un campo de entrada, el estado de un botón o la visibilidad de un elemento.
useEffect: Se utiliza para realizar solicitudes de datos a un servidor, suscribirse a eventos del navegador, manipular el DOM o realizar cualquier otra acción que no esté directamente relacionada con la representación del componente.
useContext: Se utiliza para compartir datos entre componentes, como la información del usuario autenticado, la configuración de la aplicación o el tema visual.
Conclusión
Los Hooks clásicos en React, como useState, useEffect y useContext, son herramientas fundamentales para el desarrollo de aplicaciones React modernas. Estos Hooks nos permiten escribir código más limpio, reutilizable y fácil de mantener. Dominar estos Hooks es esencial para cualquier desarrollador de React que quiera construir aplicaciones robustas y eficientes.