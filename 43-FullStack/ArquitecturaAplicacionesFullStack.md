Arquitectura de Aplicaciones Full Stack: Backend y Frontend
Introducción
En el desarrollo de software, la arquitectura de aplicaciones Full Stack involucra tanto el backend como el frontend. El backend maneja la lógica de negocio, la base de datos y la autenticación, mientras que el frontend se encarga de la interfaz de usuario y la experiencia del usuario. En esta lectura, exploraremos ambos componentes, con un énfasis particular en la arquitectura y mejores prácticas del frontend.

Backend en una Arquitectura Full Stack
El backend es la parte de la aplicación que gestiona los datos, la lógica del negocio y la comunicación con el frontend a través de APIs. Sus principales componentes incluyen:

1. Servidor
El servidor es el encargado de recibir peticiones y devolver respuestas. Se puede construir con tecnologías como:

Node.js con Express

Django con Python

Spring Boot con Java

Ejemplo en Node.js con Express:

const express = require('express');

const app = express();

app.get('/', (req, res) => {

  res.send('Hola, mundo!');

});

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));
2. Base de Datos
El backend interactúa con bases de datos SQL (PostgreSQL, MySQL) o NoSQL (MongoDB, Firebase) para almacenar información.

Ejemplo de conexión a MongoDB con Mongoose:

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/miapp', { useNewUrlParser: true, useUnifiedTopology: true });
3. APIs (REST y GraphQL)
Las APIs permiten que el frontend interactúe con el backend.

Ejemplo de API REST en Express:

app.get('/usuarios', async (req, res) => {

  const usuarios = await Usuario.find();

  res.json(usuarios);

});
Frontend en una Arquitectura Full Stack
El frontend es la capa visual y de interacción de la aplicación. Se construye con HTML, CSS y JavaScript, utilizando bibliotecas y frameworks como React, Vue o Angular.

1. Estructura de un Proyecto Frontend
Un proyecto frontend bien organizado con React y Vite sigue esta estructura:

mi-proyecto/

  ├── src/

  │   ├── components/  # Componentes reutilizables

  │   ├── pages/       # Páginas principales

  │   ├── hooks/       # Custom Hooks

  │   ├── context/     # Context API para estado global

  │   ├── assets/      # Imágenes y estilos

  ├── public/         # Archivos estáticos

  ├── package.json    # Dependencias del proyecto

  ├── vite.config.js  # Configuración de Vite
2. Creación de Componentes Reutilizables
Los componentes en React facilitan la reutilización y modularización del código.

Ejemplo de un componente simple en React:

const Boton = ({ texto, onClick }) => {

  return <button onClick={onClick} className="btn">{texto}</button>;

};

export default Boton;
3. Manejo del Estado en el Frontend
Para gestionar datos en el frontend se pueden utilizar:

useState para estados locales.

useContext o Redux para estados globales.

Ejemplo de estado local:

import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
4. Consumo de APIs en el Frontend
El frontend se comunica con el backend usando fetch o bibliotecas como Axios.

Ejemplo de consumo de API con fetch:

useEffect(() => {

  fetch('https://jsonplaceholder.typicode.com/users')

    .then(res => res.json())

    .then(data => setUsuarios(data));

}, []);
5. Enrutamiento en el Frontend
React Router permite manejar rutas en aplicaciones de una sola página (SPA).

Ejemplo de configuración de rutas:

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
Casos de Uso en el Mundo Real
1. Aplicaciones Empresariales
Sistemas de gestión de empleados con React en el frontend y Node.js en el backend.

2. E-commerce
Tiendas en línea con React y Redux para gestión del carrito de compras, y un backend con Express y MongoDB.

3. Dashboards Interactivos
Visualización de datos en tiempo real con React y APIs REST o WebSockets para comunicación con el backend.

Taller para ilustrar una pequeña aplicación (full stack)
En este workshop, construiremos una aplicación Full Stack utilizando el stack MERN (MongoDB, Express, React y Node.js) para gestionar alumnos en grupos de clase. Implementaremos un CRUD (Create, Read, Update, Delete) completo siguiendo la arquitectura explicada en la lectura "Arquitectura de Aplicaciones Full Stack: Backend y Frontend".

1. Descripción del Problema
Necesitamos una aplicación que permita gestionar alumnos y sus asignaciones a grupos de clase. Los usuarios deben poder:

Agregar nuevos alumnos.
Ver la lista de alumnos y sus grupos.
Editar la información de un alumno.
Eliminar alumnos si es necesario.
2. Objetivo
El objetivo es construir una aplicación MERN que implemente el CRUD de alumnos con una interfaz React funcional y un backend en Express conectado a una base de datos MongoDB.

3. Instrucciones
3.1. Configuración del Proyecto Backend
1. Inicializar un proyecto Node.js,desde la terminal ejecutar:

mkdir backend && cd backend

npm init -y

npm install express mongoose cors dotenv
2. Crear el servidor en Express:

// backend/index.js

require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGO_URI, {

  useNewUrlParser: true,

  useUnifiedTopology: true,

}).then(() => console.log("Conectado a MongoDB"));

app.listen(5000, () => console.log("Servidor corriendo en el puerto 5000"));
3. Crear el modelo de Alumno:

// backend/models/Alumno.js

const mongoose = require('mongoose');

const AlumnoSchema = new mongoose.Schema({

  nombre: String,

  edad: Number,

  grupo: String

});

module.exports = mongoose.model('Alumno', AlumnoSchema);
4. Definir las rutas del CRUD:

// backend/routes/alumnos.js

const express = require('express');

const router = express.Router();

const Alumno = require('../models/Alumno');

// Crear alumno

router.post('/', async (req, res) => {

  const nuevoAlumno = new Alumno(req.body);

  await nuevoAlumno.save();

  res.json(nuevoAlumno);

});

// Obtener todos los alumnos

router.get('/', async (req, res) => {

  const alumnos = await Alumno.find();

  res.json(alumnos);

});

// Actualizar alumno

router.put('/:id', async (req, res) => {

  const alumnoActualizado = await Alumno.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.json(alumnoActualizado);

});

// Eliminar alumno

router.delete('/:id', async (req, res) => {

  await Alumno.findByIdAndDelete(req.params.id);

  res.json({ message: 'Alumno eliminado' });

});

module.exports = router;
5. Integrar las rutas en el servidor:

const alumnosRouter = require('./routes/alumnos');

app.use('/api/alumnos', alumnosRouter);
3.2. Configuración del Proyecto Frontend
1. Crear la aplicación con Vite:

npx create-vite frontend --template react

cd frontend

npm install axios react-router-dom
2. Crear la API de conexión:

// frontend/src/api.js

import axios from 'axios';

export const api = axios.create({ baseURL: 'http://localhost:5000/api/alumnos' });
3. Componente para listar alumnos:

import { useEffect, useState } from 'react';

import { api } from '../api';

function ListaAlumnos() {

  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {

    api.get('/').then(res => setAlumnos(res.data));

  }, []);

  return (

    <div>

      <h2>Lista de Alumnos</h2>

      <ul>

        {alumnos.map(alumno => (

          <li key={alumno._id}>{alumno.nombre} - Grupo: {alumno.grupo}</li>

        ))}

      </ul>

    </div>

  );

}

export default ListaAlumnos;
4. Componente de formulario para agregar alumno:

import { useState } from 'react';

import { api } from '../api';

function FormularioAlumno() {

  const [nombre, setNombre] = useState('');

  const [edad, setEdad] = useState('');

  const [grupo, setGrupo] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();

    await api.post('/', { nombre, edad, grupo });

    window.location.reload();

  };

  return (

    <form onSubmit={handleSubmit}>

      <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />

      <input type="number" placeholder="Edad" value={edad} onChange={e => setEdad(e.target.value)} required />

      <input type="text" placeholder="Grupo" value={grupo} onChange={e => setGrupo(e.target.value)} required />

      <button type="submit">Agregar Alumno</button>

    </form>

  );

}

export default FormularioAlumno;
4. Solución Completa y Explicación final del ejemplo
El backend maneja las operaciones CRUD con MongoDB usando Mongoose, mientras que el frontend consume estas APIs con React y Axios. Se modulariza la lógica en rutas y componentes reutilizables para escalabilidad.

Conclusión
La arquitectura Full Stack permite desarrollar aplicaciones completas combinando backend y frontend. El backend maneja la lógica de negocio y almacenamiento de datos, mientras que el frontend gestiona la interacción con el usuario. Implementar una buena arquitectura en el frontend con componentes reutilizables, gestión eficiente del estado y consumo adecuado de APIs es clave para construir aplicaciones escalables y mantenibles.