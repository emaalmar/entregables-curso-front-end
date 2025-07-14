import { useState } from 'react'
import './App.css'
import Tarjeta from './Tarjeta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Tarjeta de Presentación</h1>
      {/* Renderizamos el componente Tarjeta */}
      <Tarjeta />
    </>
  )
}

export default App
