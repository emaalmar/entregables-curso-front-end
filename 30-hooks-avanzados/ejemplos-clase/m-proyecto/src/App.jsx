import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputFocus from './InputFocusUseRef'
import ContadorUseRef from './ContadorUseRef'
import TemporizadorUseRef from './TemporizadorUseRef'
import ContadorConCallback from './ContadorConCallback'
import PadreCallback from './PadreCallback'
import ContadorconUseReducer from './ContadorconUseReducer'
import FormularioUseReducer from './FormularioUseReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputFocus />
      <ContadorUseRef />

      <hr />

      <TemporizadorUseRef />

      <h2> Callback</h2>

      <ContadorConCallback/>

      <PadreCallback/>

      <h2>UseReducer</h2>

      <ContadorconUseReducer/>

      <FormularioUseReducer/>
    </>
  )
}

export default App
