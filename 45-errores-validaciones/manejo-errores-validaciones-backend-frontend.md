Manejo de Errores y Validaciones en Backend y Frontend
Introducción
El manejo de errores y la implementación de validaciones son aspectos clave para garantizar la seguridad, estabilidad y experiencia del usuario en una aplicación web. En el stack MERN (MongoDB, Express, React, Node.js), es esencial gestionar correctamente los errores y validar tanto las entradas del usuario en el frontend como las respuestas del servidor en el backend.

Este módulo aborda cómo gestionar errores y validaciones en ambos entornos, asegurando que la aplicación sea robusta y libre de vulnerabilidades.

🎯 Objetivos
Entender cómo manejar errores en backend (Node.js y Express) y frontend (React).
Implementar validaciones de formularios en React para prevenir errores antes de enviar datos.
Gestionar respuestas del servidor para informar adecuadamente al usuario de errores o situaciones excepcionales.
Garantizar que la aplicación sea segura y manejable ante entradas incorrectas o inesperadas.
⚡️ 1. Validaciones y Manejo de Errores en el Backend
Las validaciones en el backend son necesarias para asegurar que los datos recibidos son correctos antes de ser almacenados en la base de datos o utilizados en la lógica de la aplicación.

📚 Principales Bibliotecas para Validaciones
express-validator - Permite validar y 'sanitizar' datos en Express.
Joi - Define un esquema para validar objetos JavaScript.
📌 Ejemplo con express-validator
// routes/userRoutes.js

const express = require('express');

const { body, validationResult } = require('express-validator');

const router = express.Router();

router.post(

  '/register',

  [

    body('email').isEmail().withMessage('Invalid email address'),

    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

  ],

  (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

      return res.status(400).json({ errors: errors.array() });

    }

    res.status(200).send('User registered successfully');

  }

);

module.exports = router;
🚨 Manejo de Errores en el Backend
El manejo de errores en Node.js implica capturar excepciones y enviar respuestas adecuadas al cliente.

📌 Middleware de Manejo de Errores en Express
// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {

  console.error(err.message);

  res.status(err.status || 500).json({

    error: {

      message: err.message || 'Internal Server Error',

    },

  });

};

module.exports = errorHandler;
👉 Incluir en el servidor:

// server.js

const express = require('express');

const userRoutes = require('./routes/userRoutes');

const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(5000, () => console.log('Server running on port 5000'));
⚡️ 2. Validaciones y Manejo de Errores en el Frontend
La validación de formularios en el frontend previene el envío de datos incorrectos o malformados al servidor, mejorando la experiencia del usuario.

📚 Principales Bibliotecas para Validaciones
react-hook-form - Manejo de formularios basado en hooks.
zod - Validación de esquemas para formularios y objetos.
📌 Ejemplo de Formulario Validado con react-hook-form y zod
// components/RegisterForm.jsx

import React from 'react';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

// Definir esquema de validación con Zod

const schema = z.object({

  email: z.string().email('Invalid email address').nonempty('Email is required'),

  password: z.string().min(6, 'Password must be at least 6 characters').nonempty('Password is required'),

});

const RegisterForm = () => {

  const {

    register,

    handleSubmit,

    formState: { errors },

  } = useForm({

    resolver: zodResolver(schema),

  });

  const onSubmit = (data) => {

    console.log('Form submitted:', data);

  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <div>

        <label>Email:</label>

        <input type="email" {...register('email')} />

        {errors.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}

      </div>

      <div>

        <label>Password:</label>

        <input type="password" {...register('password')} />

        {errors.password && <div style={{ color: 'red' }}>{errors.password.message}</div>}

      </div>

      <button type="submit">Register</button>

    </form>

  );

};

export default RegisterForm;
⚡️ 3. Manejo de Errores de API en el Frontend
Al consumir APIs desde React, es crucial manejar errores correctamente para mostrar mensajes claros al usuario.

📌 Ejemplo de Manejo de Errores en Fetch API
// services/userService.js

const registerUser = async (userData) => {

  try {

    const response = await fetch('/api/users/register', {

      method: 'POST',

      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify(userData),

    });

    if (!response.ok) {

      const errorData = await response.json();

      throw new Error(errorData.error.message);

    }

    return await response.json();

  } catch (error) {

    throw new Error(error.message || 'Something went wrong');

  }

};

export default registerUser;
⚡️ 4. Validaciones y Manejo de Errores en MongoDB
En MongoDB, es importante validar esquemas antes de insertar datos, evitando que información malformada llegue a la base de datos.

📌 Ejemplo con Mongoose
// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  email: {

    type: String,

    required: [true, 'Email is required'],

    match: [/.+\@.+\..+/, 'Invalid email format'],

  },

  password: {

    type: String,

    required: [true, 'Password is required'],

    minlength: [6, 'Password must be at least 6 characters'],

  },

});

module.exports = mongoose.model('User', userSchema);
🚀 5. Ejemplo Completo: Validación y Manejo de Errores
A continuación, se presenta un ejemplo completo de validación de formularios con react-hook-form y zod, junto con un backend que valida los datos antes de guardarlos.

📌 Backend: Validación y Manejo de Errores
// server.js

const express = require('express');

const mongoose = require('mongoose');

const { body, validationResult } = require('express-validator');

const app = express();

app.use(express.json());

mongoose

  .connect('mongodb://localhost:27017/usersDB')

  .then(() => console.log('MongoDB Connected'))

  .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({

  email: { type: String, required: true, match: /.+\@.+\..+/ },

  password: { type: String, required: true, minlength: 6 },

});

const User = mongoose.model('User', UserSchema);

app.post(

  '/api/register',

  [

    body('email').isEmail().withMessage('Invalid email address'),

    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

  ],

  async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

      return res.status(400).json({ errors: errors.array() });

    }

    try {

      const { email, password } = req.body;

      const newUser = new User({ email, password });

      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {

      res.status(500).json({ error: 'Server error' });

    }

  }

);

app.listen(5000, () => console.log('Server running on port 5000'));
📌 Frontend: Formulario de Registro
// components/RegisterForm.jsx

import React from 'react';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

const schema = z.object({

  email: z.string().email('Invalid email address').nonempty('Email is required'),

  password: z.string().min(6, 'Password must be at least 6 characters').nonempty('Password is required'),

});

const RegisterForm = () => {

  const {

    register,

    handleSubmit,

    formState: { errors },

  } = useForm({

    resolver: zodResolver(schema),

  });

  const onSubmit = async (data) => {

    try {

      const response = await fetch('/api/register', {

        method: 'POST',

        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify(data),

      });

      if (!response.ok) {

        const errorData = await response.json();

        alert(errorData.errors[0].msg);

      } else {

        alert('User registered successfully!');

      }

    } catch (error) {

      console.error('Error:', error);

    }

  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <div>

        <label>Email:</label>

        <input type="email" {...register('email')} />

        {errors.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}

      </div>

      <div>

        <label>Password:</label>

        <input type="password" {...register('password')} />

        {errors.password && <div style={{ color: 'red' }}>{errors.password.message}</div>}

      </div>

      <button type="submit">Register</button>

    </form>

  );

};

export default RegisterForm;
🚀 Casos de Uso en el Mundo Real
Registro de Usuarios: Validar correos y contraseñas tanto en el frontend como en el backend para garantizar la seguridad.
Procesamiento de Formularios: Mostrar errores de validación en tiempo real en formularios React y validar en el backend para evitar inyecciones.
API de E-commerce: Validar productos y pedidos para asegurar que no se almacenen datos incorrectos en la base de datos.
🎯 Conclusión
El manejo adecuado de errores y validaciones mejora la experiencia del usuario y protege la integridad de los datos. Implementar validaciones en el frontend con react-hook-form/zod y en el backend con express-validator o Joi es una práctica clave para garantizar que las aplicaciones MERN sean robustas y seguras. Además, el manejo de errores debe incluir respuestas claras al usuario y un middleware eficiente para capturar errores del servidor.

📚 Bibliografía y Recursos Adicionales
React Hook Form - Documentación Oficial
Zod - Validación de Esquemas
Express Validator - Documentación Oficial
Mongoose - Validación de Modelos
Error Handling in Express