import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css'
import Navbar from './Navbar';
import UserProfile from './UserProfile';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Navbar />
      <button onClick={() => setIsAuthenticated(prev => !prev)}>
        {isAuthenticated ? 'Cerrar sesión' : 'Iniciar sesión'}
      </button>
      <h3>{isAuthenticated ? "Sesión iniciada" : "No has iniciado sesión"}</h3>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />

        {/* <Route path="/user/:id" element={<UserProfile />} /> */}

        <Route
          path="/user/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UserProfile />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  )
}

export default App
