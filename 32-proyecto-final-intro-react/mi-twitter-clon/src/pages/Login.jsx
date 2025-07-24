import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {

    const [username, setUsername] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        // Pista: Llamar a la función onLogin y redirigir
        if (!username.trim()) {
            alert("El nombre de usuario es obligatorio.");
            return;
        }

        onLogin(username)
        navigate('/')

    };

    return (
        <>
            <h2>Inicio de Sesion</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Nombre de usuario'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login