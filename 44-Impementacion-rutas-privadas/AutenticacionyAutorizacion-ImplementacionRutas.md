Autenticación y Autorización: Implementación de Rutas Privadas en MERN
1. Introducción
En el desarrollo de aplicaciones web modernas, asegurar el acceso a información sensible es una prioridad. Autenticación y autorización son dos procesos clave que garantizan que los usuarios adecuados accedan a la información correcta. En una aplicación MERN (MongoDB, Express, React y Node.js), esto suele lograrse mediante JSON Web Tokens (JWT), un estándar seguro para la transmisión de información.

Autenticación: Verifica la identidad del usuario antes de permitirle acceder al sistema.
Autorización: Determina qué recursos o acciones puede realizar el usuario autenticado.
Esta lectura cubre la implementación de rutas privadas para proteger datos y controlar el acceso a partes sensibles de una aplicación MERN, utilizando JWT para la autenticación.

2. Autenticación y Autorización con JWT
¿Qué es un JSON Web Token (JWT)?
Un JWT es un token codificado en formato JSON que se utiliza para transferir información de manera segura entre el cliente y el servidor. El token consta de tres partes:

Header: Contiene el tipo de token (JWT) y el algoritmo de cifrado.
Payload: Contiene la información del usuario y las reclamaciones (claims).
Signature: Garantiza la integridad del token.
// Ejemplo de JWT decodificado

{

  "header": {

    "alg": "HS256",

    "typ": "JWT"

  },

  "payload": {

    "id": "12345",

    "email": "usuario@example.com",

    "role": "admin"

  },

  "signature": "firma_generada"

}
¿Cómo funciona JWT en MERN?
El usuario inicia sesión y proporciona credenciales válidas.
El servidor genera un JWT firmado y lo envía al cliente.
El cliente almacena el JWT (normalmente en localStorage o cookies).
En cada solicitud posterior, el cliente envía el JWT para autenticarse.
El servidor valida el token antes de otorgar acceso.
3. Implementación de Rutas Privadas en MERN
3.1 Backend: Configuración del Servidor con Node.js y Express
Instalación de dependencias
npm init -y

npm install express mongoose bcryptjs jsonwebtoken dotenv
Archivo: server.js
const express = require('express');

const dotenv = require('dotenv');

const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)

  .then(() => console.log('MongoDB Connected'))

  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
3.2 Creación de Usuario y Autenticación
Archivo: models/User.js
const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({

  name: { type: String, required: true },

  email: { type: String, required: true, unique: true },

  password: { type: String, required: true }

});

// Encriptar contraseña antes de guardar

userSchema.pre('save', async function (next) {

  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();

});

module.exports = mongoose.model('User', userSchema);
Archivo: controllers/authController.js
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const bcrypt = require('bcryptjs');

// Generar JWT

const generateToken = (id) => {

  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });

};

// Registro de usuario

exports.registerUser = async (req, res) => {

  const { name, email, password } = req.body;

  try {

    const user = await User.create({ name, email, password });

    res.status(201).json({ token: generateToken(user.id) });

  } catch (error) {

    res.status(400).json({ error: 'Error al registrar usuario' });

  }

};

// Inicio de sesión

exports.loginUser = async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {

    res.json({ token: generateToken(user.id) });

  } else {

    res.status(401).json({ error: 'Credenciales inválidas' });

  }

};
3.3 Protección de Rutas Privadas
Middleware: middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const protect = async (req, res, next) => {

  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

    try {

      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

      next();

    } catch (error) {

      res.status(401).json({ error: 'Token inválido, acceso denegado' });

    }

  }

  if (!token) {

    res.status(401).json({ error: 'No autorizado, token no encontrado' });

  }

};

module.exports = protect;
Archivo: routes/privateRoutes.js
const express = require('express');

const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile', protect, (req, res) => {

  res.json({ message: 'Ruta protegida accedida correctamente', user: req.user });

});

module.exports = router;
4. Integración del Frontend con React
4.1 Autenticación y Almacenamiento del Token
Almacenar el token: Usar localStorage o sessionStorage para guardar el JWT.
Interceptar solicitudes: Configurar axios para enviar automáticamente el token en los encabezados.
// axiosConfig.js

import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {

  const token = localStorage.getItem('token');

  if (token) {

    req.headers.Authorization = `Bearer ${token}`;

  }

  return req;

});

export default API;
4.2 Creación de Rutas Privadas
Archivo: PrivateRoute.js
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

  const token = localStorage.getItem('token');

  return token ? children : <Navigate to="/login" />;

};

export default PrivateRoute;
Implementación en App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Profile from './pages/Profile';

import Login from './pages/Login';

function App() {

  return (

    <Router>

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route

          path="/profile"

          element={

            <PrivateRoute>

              <Profile />

            </PrivateRoute>

          }

        />

      </Routes>

    </Router>

  );

}

export default App;
5. Casos de Uso en el Mundo Real
Plataformas de e-commerce: Protegen rutas de administración para gestionar inventarios.
Sistemas de gestión de contenido (CMS): Limitan acceso a editores y administradores.
Aplicaciones de banca en línea: Restringen transacciones y operaciones sensibles.
6. Conclusión
La correcta implementación de autenticación y autorización es esencial para garantizar la seguridad de las aplicaciones web. En un stack MERN, el uso de JWT facilita la autenticación y permite proteger rutas privadas de manera efectiva. La integración de rutas protegidas en el frontend de React asegura que solo los usuarios autenticados puedan acceder a información sensible.

Al dominar esta técnica, podrás construir aplicaciones robustas y seguras, protegiendo datos críticos y garantizando la mejor experiencia para tus usuarios.