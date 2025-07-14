import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaCompras from './ListaCompras'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ListaCompras/>
    </>
  )
}

export default App
