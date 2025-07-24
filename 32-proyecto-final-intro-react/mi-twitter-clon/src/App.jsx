
import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Pista: Recuperar información del usuario desde localStorage
    const infoUsuario = localStorage.getItem('infousuarios');
    if (infoUsuario) {
      setUser(JSON.parse(infoUsuario))
    }
  }, [])

  const login = (username) => {
    // Pista: Actualizar estado y guardar información en localStorage
    const userData = { username };
    setUser(userData);
    localStorage.setItem('infousuarios', JSON.stringify(userData))
  }


  const logout = () => {
    // Pista: Eliminar información del usuario del estado y localStorage
    setUser(null);
    localStorage.removeItem('infousuarios')
  };

  return (
    <>

      <Routes>
        <Route path="/" element={user ? <Home user={user} logout={logout} /> : <Navigate to='/login' />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/login" />} />

      </Routes>

    </>
  )
}

export default App
