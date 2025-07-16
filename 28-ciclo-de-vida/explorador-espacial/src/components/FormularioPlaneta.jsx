import React, { useState } from 'react'

const FormularioPlaneta = ({ onAgregar }) => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState(null);

    const manejarEnvio = (e) => {
        e.preventDefault();

        if (!nombre && !descripcion) {
            alert("Nombre y descripcion son obligatorios");
            return
        }

        const nuevoPlaneta = {
            nombre,
            descripcion,
            imagen: imagen ? URL.createObjectURL(imagen) : null
        };

        onAgregar(nuevoPlaneta)

        setNombre('');
        setDescripcion('');
        setImagen(null);
        e.target.reset(); // Limpiar input tipo file

    }
    return (
        <>
            <form onSubmit={manejarEnvio}>
                <input
                    type="text"
                    placeholder='Nombre del planeta'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />

                <textarea
                    placeholder='Descripcion del Planeta'
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    required
                />

                <input
                    type='file'
                    accept='image/*'
                    onChange={(e) => setImagen(e.target.files[0])}
                />

                <button type='submit'>Agregar Planetas</button>
            </form>
        </>
    )
}


export default FormularioPlaneta;