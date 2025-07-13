Hooks Avanzados: useRef y useCallback
Introducción
React ofrece diversos hooks para gestionar el estado y el ciclo de vida de los componentes funcionales. Entre los más avanzados encontramos useRef y useCallback, que permiten optimizar el rendimiento de nuestras aplicaciones y gestionar referencias a elementos o valores mutables sin causar renders innecesarios.

Esta lección explora estos hooks en profundidad, explicando sus usos, ejemplos prácticos y escenarios del mundo real donde pueden marcar la diferencia.

useRef
El hook useRef se usa para mantener referencias a valores que persisten entre renders sin causar una nueva renderización del componente.

Características principales:
No dispara renders al actualizarse.
Puede referenciar elementos del DOM.
Se mantiene persistente entre renders.
Sintaxis básica:
import { useRef, useEffect } from 'react';

function InputFocus() {

  const inputRef = useRef(null);

  useEffect(() => {

    inputRef.current.focus(); // Enfoca el input al montar el componente

  }, []);

  return <input ref={inputRef} placeholder="Escribe aquí..." />;

}
Uso en almacenamiento de valores sin re-render:
A diferencia del estado (useState), useRef permite almacenar valores mutables sin causar una renderización adicional.

import { useRef, useState } from 'react';

function Contador() {

  const renderCount = useRef(0);

  const [count, setCount] = useState(0);

  renderCount.current += 1;

  return (

    <div>

      <p>Contador: {count}</p>

      <p>Renderizado: {renderCount.current} veces</p>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>

    </div>

  );

}
Caso de uso: Manejo de temporizadores
import { useRef } from 'react';

function Temporizador() {

  const timerRef = useRef(null);

  const iniciarTemporizador = () => {

    timerRef.current = setTimeout(() => {

      alert('Tiempo agotado!');

    }, 3000);

  };

  const cancelarTemporizador = () => {

    clearTimeout(timerRef.current);

  };

  return (

    <div>

      <button onClick={iniciarTemporizador}>Iniciar</button>

      <button onClick={cancelarTemporizador}>Cancelar</button>

    </div>

  );

}
useCallback
El hook useCallback se usa para memorizar funciones y evitar su recreación en cada render, lo que mejora el rendimiento cuando se pasan funciones como props a componentes hijos.

Características principales:
Memoriza una función y la devuelve solo si sus dependencias cambian.
Ayuda a evitar renders innecesarios en componentes hijos.
Sintaxis básica:
import { useCallback, useState } from 'react';

function ContadorConCallback() {

  const [count, setCount] = useState(0);

  const incrementar = useCallback(() => {

    setCount(prev => prev + 1);

  }, []);

  return (

    <div>

      <p>Contador: {count}</p>

      <button onClick={incrementar}>Incrementar</button>

    </div>

  );

}
Caso de uso: Evitar renders innecesarios en componentes hijos
Cuando un componente hijo recibe una función como prop, se vuelve a renderizar cada vez que el padre se renderiza. Con useCallback, podemos evitar esto.

import { useState, useCallback } from 'react';

import Hijo from './Hijo';

function Padre() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {

    console.log('Click en el botón');

  }, []);

  return (

    <div>

      <p>Contador: {count}</p>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>

      <Hijo onClick={handleClick} />

    </div>

  );

}

function Hijo({ onClick }) {

  console.log('Hijo renderizado');

  return <button onClick={onClick}>Click</button>;

}
En este caso, Hijo solo se renderiza cuando handleClick cambia, lo que evita renderizaciones innecesarias.

Casos de uso en el mundo real
useRef para optimizar manipulación del DOM: Ideal para acceder y modificar elementos sin usar estado.
useRef para gestionar temporizadores: Permite manejar setTimeout o setInterval sin que el componente se vuelva a renderizar.
useCallback para optimizar listas grandes: Ayuda a evitar recreaciones innecesarias de funciones en elementos de listas renderizadas de forma eficiente.
useCallback en optimización de performance con React.memo(): Evita renders innecesarios en componentes memoizados.
Conclusión
Los hooks avanzados useRef y useCallback son herramientas poderosas en React que permiten mejorar el rendimiento y la gestión de referencias dentro de los componentes. useRef es útil para almacenar referencias mutables sin causar re-render, mientras que useCallback evita la recreación innecesaria de funciones.

Su correcto uso puede marcar la diferencia en aplicaciones complejas, reduciendo la carga de render y optimizando la experiencia del usuario.