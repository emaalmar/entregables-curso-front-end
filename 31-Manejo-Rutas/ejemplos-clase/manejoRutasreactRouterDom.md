Manejo de rutas con: react-router-dom
Introducción
En aplicaciones modernas de React, el manejo de rutas es esencial para crear experiencias de usuario fluidas y organizadas. react-router-dom es la biblioteca más utilizada para gestionar la navegación en aplicaciones React de una sola página (SPA). En esta lectura, exploraremos cómo funciona esta biblioteca, sus principales componentes y mejores prácticas para su implementación.

Instalación de react-router-dom
Antes de comenzar, necesitamos instalar la biblioteca en nuestro proyecto de React. Si estás usando Vite, puedes instalarla con:

npm install react-router-dom
Luego, asegurémonos de envolver nuestra aplicación con BrowserRouter en el punto de entrada, generalmente main.jsx:

import React from 'react';

import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>

    <App />

  </BrowserRouter>

);
Definiendo rutas con react-router-dom
Para definir rutas, utilizamos el componente Routes que contiene varias definiciones de Route. Cada Route se asocia con un componente que se renderizará cuando la URL coincida con la ruta definida.

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import About from './pages/About';

import NotFound from './pages/NotFound';

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="*" element={<NotFound />} />

    </Routes>

  );

}

export default App;
Navegación entre rutas
Para navegar entre rutas sin recargar la página, utilizamos el componente Link en lugar de a.

import { Link } from 'react-router-dom';

function Navbar() {

  return (

    <nav>

      <Link to="/">Inicio</Link>

      <Link to="/about">Acerca de</Link>

    </nav>

  );

}
Rutas dinámicas y useParams
Podemos crear rutas dinámicas utilizando :param, y acceder a los parámetros con useParams.

import { useParams } from 'react-router-dom';

function UserProfile() {

  const { id } = useParams();

  return <h1>Perfil del usuario {id}</h1>;

}
Definiendo la ruta:

<Route path="/user/:id" element={<UserProfile />} />
Redirecciones con Navigate
Podemos redirigir a los usuarios utilizando el componente Navigate.

import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {

  return isAuthenticated ? children : <Navigate to="/" />;

}
Casos de uso en el mundo real
Panel de administración: Implementar rutas protegidas para restringir accesos según el rol del usuario.
E-commerce: Gestionar rutas dinámicas para productos con identificadores únicos.
Blogs o foros: Crear rutas amigables con slug en lugar de IDs para mejorar SEO.
Conclusión
El manejo de rutas con react-router-dom es fundamental para desarrollar aplicaciones React modernas y escalables. Con una estructura bien definida, podemos mejorar la navegación y experiencia del usuario en nuestra aplicación.