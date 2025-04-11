// app.js
import { login } from './auth.js';
import { obtenerDatos } from './db.js';

if (login('admin', '1234')) {
    console.log('Login exitoso');
    console.log(obtenerDatos());
} else {
    console.log('Login fallido');
}