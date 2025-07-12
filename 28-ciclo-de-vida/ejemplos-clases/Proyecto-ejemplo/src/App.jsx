import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent'
import MyComponentUseState from './MyComponentUseState'
import MyComponentUseEffect from './MyComponentUseEffect'
import MyComponentUseContext from './MyComponentUseContext'


function App() {
  const [count, setCount] = useState(0)
  const valorDelContexto = "Hola desde el contexto 🎉";

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* <MyComponent/> */}
      <MyComponentUseState />
      <MyComponentUseEffect />

      <MyContext.Provider value={valorDelContexto}>
        <div>
          <h1>App Principal</h1>
          <MyComponentUseContext />
        </div>
      </MyContext.Provider>

    </>
  )
}

export default App
export const MyContext = React.createContext();