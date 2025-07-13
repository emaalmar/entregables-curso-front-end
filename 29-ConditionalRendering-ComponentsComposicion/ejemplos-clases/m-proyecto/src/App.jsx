import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './WelcomeMessage'
import WelcomeMessageOperadorTernario from './WelcomeMessageOperadorTernario'
import NotificationOperadorLogicoAmp from './NotificationOperadorLogicoAmp'
import StatusMessageWithSwitch from './StatusMessageWithSwitch'

function Header() {
  return <h1>Bienvenido a mi aplicación</h1>;
}

function Content() {
  return <p>Este es el contenido principal de la aplicación.</p>;
}

function Card({ children }) {

  return (

    <div style={{ border: '1px solid black', padding: '10px', borderRadius: '5px' }}>
      <h2>Ejemplo con 'props.children'</h2>
      {children}

    </div>

  );

}

function Modal({ title, content }) {

  return (

    <div style={{ border: '1px solid gray', padding: '20px', backgroundColor: 'lightgray' }}>
      <h2> Ejemplo de componente especializado</h2>
      <h2>{title}</h2>

      <p>{content}</p>

    </div>

  );

}

function App() {
  const [hasNewMessages, setHasNewMessages] = useState(true);
  const [status, setStatus] = useState("loading")

  return (
    <>
      <WelcomeMessage isLoggedIn={false} />
      <hr />
      <WelcomeMessageOperadorTernario isLoggedIn={true} />
      <hr />
      <NotificationOperadorLogicoAmp hasNewMessages={hasNewMessages} />
      <button onClick={() => setHasNewMessages(prev => !prev)}>
        {hasNewMessages ? 'Marcar como leído' : 'Mostrar mensajes'}
      </button>

      {/* <StatusMessageWithSwitch status={'error'}/> */}
      <hr />

      <h2>Estado de carga:</h2>
      <StatusMessageWithSwitch status={status} />

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setStatus("loading")}>Cargar</button>
        <button onClick={() => setStatus("success")}>Éxito</button>
        <button onClick={() => setStatus("error")}>Error</button>
        <button onClick={() => setStatus("otro")}>Otro</button>
      </div>

      <hr />
      <hr />

      <div>
        <h2>Ejemplo básico composicion</h2>
        <Header />

        <Content />

      </div>

      <Card>

        <h2>Título dentro de Card</h2>

        <p>Este es un contenido dentro de la tarjeta.</p>

      </Card>

      <Modal title="Aviso" content="Este es un mensaje importante." />


    </>
  )
}

export default App
