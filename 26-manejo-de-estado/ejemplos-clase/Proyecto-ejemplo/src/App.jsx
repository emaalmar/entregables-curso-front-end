import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Mensaje from './Mensaje'
import './App.css'
import TarjetaUsuario from './TarjetaUsuario'
import Contador from './SitaxUseState'
import PerfilUsuario from './PerfilUsuario'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
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


        <h1>Ejemplo de Props en React</h1>

        <Mensaje texto="¡Hola, mundo!" />

        <Mensaje texto="Bienvenido a React" />


        <h1>Usuarios</h1>
        <TarjetaUsuario nombre="Ana Pérez" edad={28} ocupacion="Ingeniera de Software" />
        <TarjetaUsuario nombre="Carlos Gómez" edad={35} ocupacion="Diseñador UX" />

        <Contador/>

        <PerfilUsuario/>
      </>
    </div>

  );
}

export default App
