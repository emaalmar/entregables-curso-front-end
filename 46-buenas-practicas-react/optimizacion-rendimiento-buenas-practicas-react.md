Optimización del Rendimiento y Buenas Prácticas en React
Introducción
React es una biblioteca popular para construir interfaces de usuario, pero su rendimiento puede verse afectado por malas prácticas o ineficiencias en el código. Optimizar el rendimiento de una aplicación React es crucial para mejorar la experiencia del usuario y reducir el consumo de recursos. En esta lectura, exploraremos estrategias de optimización y buenas prácticas para desarrollar aplicaciones React eficientes.

Estrategias de Optimización en React
1. Evitar Rerenderizados Innecesarios
Cada vez que el estado o las propiedades de un componente cambian, React vuelve a "renderizarlo". Esto puede generar problemas de rendimiento si no se maneja correctamente.

Uso de React.memo
React.memo evita renders innecesarios al memorizar el resultado del componente y volver a "renderizarlo" solo si sus props cambian.

import React from "react";

const MyComponent = React.memo(({ value }) => {

  console.log("Renderizado");

  return <div>{value}</div>;

});

export default MyComponent;
Uso de useCallback y useMemo
useCallback: Memoriza funciones para evitar que se creen nuevamente en cada render.

useMemo: Memoriza valores calculados para evitar reevaluaciones costosas.

import { useCallback, useMemo, useState } from "react";

const ExpensiveComponent = ({ compute, number }) => {

  const result = useMemo(() => compute(number), [compute, number]);

  return <div>Resultado: {result}</div>;

};

const Parent = () => {

  const [count, setCount] = useState(0);

  const compute = useCallback((num) => num * 2, []);

  return (

    <>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>

      <ExpensiveComponent compute={compute} number={count} />

    </>

  );

};
2. Carga Diferida (Lazy Loading)
Para mejorar el tiempo de carga inicial, React permite cargar componentes de manera diferida con React.lazy y Suspense.

import React, { Suspense, lazy } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

const App = () => {

  return (

    <Suspense fallback={<div>Cargando...</div>}>

      <HeavyComponent />

    </Suspense>

  );

};

export default App;
3. Virtualización de Listas
Cuando se manejan listas grandes, es recomendable renderizar solo los elementos visibles en pantalla. Esto se logra con bibliotecas como react-window o react-virtualized.

import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }) => <div style={style}>Elemento {index}</div>;

const App = () => (

  <List height={400} width={300} itemSize={35} itemCount={1000}>

    {Row}

  </List>

);
4. Optimización del Estado Global
El manejo ineficiente del estado global puede afectar el rendimiento. Se recomienda:

Usar Context API solo cuando sea necesario.

Optar por bibliotecas como Zustand, Recoil o Jotai en lugar de Redux si la aplicación no requiere un manejo complejo del estado.

import create from "zustand";

const useStore = create((set) => ({

  count: 0,

  increment: () => set((state) => ({ count: state.count + 1 }))

}));

const Counter = () => {

  const { count, increment } = useStore();

  return (

    <>

      <p>{count}</p>

      <button onClick={increment}>Incrementar</button>

    </>

  );

};
5. Uso Eficiente de Efectos con useEffect
useEffect debe utilizarse correctamente para evitar llamadas innecesarias.

import { useEffect, useState } from "react";

const Component = ({ id }) => {

  const [data, setData] = useState(null);

  useEffect(() => {

    fetch(`/api/data/${id}`)

      .then((res) => res.json())

      .then(setData);

  }, [id]); // Dependencia correcta

  return <div>{data ? JSON.stringify(data) : "Cargando..."}</div>;

};
Casos de Uso en el Mundo Real
1. Mejora del Rendimiento en Dashboards
En aplicaciones que manejan grandes volúmenes de datos, como dashboards financieros, es clave implementar:

Virtualización de listas para tablas grandes.

Memorización de cálculos costosos con useMemo.

Carga diferida de gráficos y componentes pesados.

2. Optimización de Aplicaciones de Mensajería
En aplicaciones como chats o redes sociales, es importante:

Evitar "rerenderizados" innecesarios con React.memo.

Manejo eficiente del estado global con Zustand o Recoil.

Uso de WebSockets en lugar de polling para actualizaciones en tiempo real.

3. Aplicaciones con Contenido Dinámico
Para aplicaciones con contenido pesado como plataformas de streaming, es recomendable:

Implementar Lazy Loading para cargar componentes bajo demanda.

Usar Suspense con datos asíncronos para evitar bloqueos en la UI.

Aplicar Code Splitting para reducir el tamaño de los paquetes iniciales.

Taller de práctica sobre la lectura
Proyecto de "4 en línea" (Connect Four) en React aplicando las buenas prácticas y técnicas de optimización que mencionamos en la lectura.

Características del proyecto:
✅ Uso de React.memo para evitar renders innecesarios.
✅ Manejo eficiente del estado con useState.
✅ Uso de useCallback y useMemo para optimizar cálculos y funciones.
✅ Implementación de React.lazy y Suspense para carga diferida de componentes.
✅ Virtualización de la cuadrícula para mejorar el rendimiento.

Código y explicación paso a paso.

Explicación del Código
1. Definición del tablero:

  - ROWS = 6 y COLS = 7 definen el tamaño del tablero.

  - useState inicializa el estado del tablero, el jugador actual y el ganador.

2. Uso de React.memo en el componente Cell:

  - Evita renderizaciones innecesarias cuando no cambia el valor de la celda.

3. Optimización con useCallback:

  - handleClick(col): Maneja el clic en una columna.

  - Usa useCallback para evitar recrear la función en cada render.

4. Optimización con useMemo:

  - checkWinner: Evalúa si hay un ganador.

  - Solo recalcula el resultado cuando cambia el tablero.

5. Estructura del tablero:

  - Mapea cada fila y celda para generar la cuadrícula.

6. Reinicio del juego:

  - Botón para reiniciar el estado del tablero y el jugador.

Este código sigue algunas de las mejores prácticas de React para optimizar rendimiento y evitar renders innecesarios. 🚀

Aquí tienes el paso a paso para crear el proyecto completo de 4 en línea usando React y Vite. Trata de escribir el código y comprender cada paso de la práctica.

1. Crear el Proyecto con Vite
Ejecuta el siguiente comando en la terminal:

npm create vite@latest connect-four --template react
Luego entra en el directorio del proyecto e instala las dependencias:

cd connect-four

npm install
Inicia el servidor de desarrollo con:

npm run dev
2. Estructura del Proyecto
Dentro de src/, organiza los archivos así:

src/

│── components/

│   ├── Board.jsx

│   ├── Cell.jsx

│── styles/

│   ├── styles.css

│── App.jsx

│── main.jsx
3. Código de los Componentes
Cell.jsx (Componente de Celda)
import React from "react";

import { memo } from "react";

import "../styles/styles.css";

const Cell = memo(({ value, onClick }) => {

  return (

    <div className={`cell ${value}`} onClick={onClick}></div>

  );

});

export default Cell;
✅ Optimización: Usa React.memo para evitar renders innecesarios si la celda no cambia.

Board.jsx (Tablero del Juego)
import React, { useState, useCallback, useMemo } from "react";

import Cell from "./Cell";

import "../styles/styles.css";

const ROWS = 6;

const COLS = 7;

const Board = () => {

  const [board, setBoard] = useState(Array(ROWS).fill(null).map(() => Array(COLS).fill(null)));

  const [player, setPlayer] = useState("red");

  const [winner, setWinner] = useState(null);

  const handleClick = useCallback((col) => {

    if (winner) return;

    const newBoard = board.map(row => [...row]);

    for (let row = ROWS - 1; row >= 0; row--) {

      if (!newBoard[row][col]) {

        newBoard[row][col] = player;

        setBoard(newBoard);

        setPlayer(player === "red" ? "yellow" : "red");

        checkWinner(newBoard);

        return;

      }

    }

  }, [board, player, winner]);

  const checkWinner = useMemo(() => (newBoard) => {

    const directions = [

      [0, 1], [1, 0], [1, 1], [1, -1]

    ];

    for (let r = 0; r < ROWS; r++) {

      for (let c = 0; c < COLS; c++) {

        if (!newBoard[r][c]) continue;

        for (const [dr, dc] of directions) {

          let streak = 1;

          for (let i = 1; i < 4; i++) {

            const nr = r + dr * i;

            const nc = c + dc * i;

            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && newBoard[nr][nc] === newBoard[r][c]) {

              streak++;

            } else {

              break;

            }

          }

          if (streak === 4) {

            setWinner(newBoard[r][c]);

            return;

          }

        }

      }

    }

  }, []);

  return (

    <div className="game-container">

      <h2>{winner ? `${winner.toUpperCase()} wins!` : `Turn: ${player.toUpperCase()}`}</h2>

      <div className="board">

        {board.map((row, rowIndex) => (

          <div key={rowIndex} className="row">

            {row.map((cell, colIndex) => (

              <Cell key={colIndex} value={cell} onClick={() => handleClick(colIndex)} />

            ))}

          </div>

        ))}

      </div>

      <button onClick={() => { setBoard(Array(ROWS).fill(null).map(() => Array(COLS).fill(null))); setWinner(null); setPlayer("red"); }}>Reiniciar</button>

    </div>

  );

};

export default Board;
✅ Optimización:

React.memo en Cell evita renders innecesarios.

useCallback en handleClick evita recrear la función en cada render.

useMemo en checkWinner optimiza el cálculo del ganador.

App.jsx (Componente Principal)
import React, { Suspense, lazy } from "react";

const Board = lazy(() => import("./components/Board"));

const App = () => {

  return (

    <Suspense fallback={<div>Loading...</div>}>

      <div className="app">

        <h1>Connect Four</h1>

        <Board />

      </div>

    </Suspense>

  );

};

export default App;
✅ Optimización:

Usa React.lazy y Suspense para carga diferida del componente Board.

main.jsx
import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <App />

  </React.StrictMode>

);
4. Estilos (styles/styles.css)
body {

  font-family: Arial, sans-serif;

  text-align: center;

  background-color: #282c34;

  color: white;

}

.app {

  padding: 20px;

}

.game-container {

  display: flex;

  flex-direction: column;

  align-items: center;

}

.board {

  display: grid;

  grid-template-rows: repeat(6, 50px);

  gap: 5px;

  background-color: #1e1e1e;

  padding: 10px;

  border-radius: 10px;

}

.row {

  display: flex;

  gap: 5px;

}

.cell {

  width: 50px;

  height: 50px;

  background-color: #ddd;

  border-radius: 50%;

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;

}

.cell.red {

  background-color: red;

}

.cell.yellow {

  background-color: yellow;

}

button {

  margin-top: 20px;

  padding: 10px 20px;

  font-size: 16px;

  background-color: #61dafb;

  border: none;

  cursor: pointer;

  border-radius: 5px;

}

button:hover {

  background-color: #21a1f1;

}
✅ Optimización:

grid-template-rows organiza las celdas sin necesidad de flexbox.

Colores y estilos organizados con clases dinámicas (red, yellow).

5. Ejecutar el Proyecto
Ejecuta:

npm run dev
y abre la URL que muestra la terminal (normalmente http://localhost:5173/).

Recuento del proyecto
Este proyecto implementa buenas prácticas de optimización en React, como:


✅ React.memo para evitar renders innecesarios.
✅ useCallback para funciones optimizadas.
✅ useMemo para cálculos eficientes.
✅ React.lazy y Suspense para carga diferida.

Así logramos un juego fluido y optimizado. 🚀

Conclusión
Optimizar el rendimiento en React es esencial para garantizar una experiencia de usuario fluida. Al aplicar técnicas como memorización, carga diferida, virtualización y un manejo eficiente del estado, se pueden reducir tiempos de carga y mejorar la eficiencia de la aplicación. Implementar estas buenas prácticas no solo mejora el rendimiento, sino que también facilita el mantenimiento del código y la escalabilidad del proyecto.