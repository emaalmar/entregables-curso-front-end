import './style.css';

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let historial = [];

const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const botonReiniciar = document.getElementById('reiniciar');
const mensaje = document.getElementById('mensaje');
const intentosSpan = document.getElementById('intentos');
const historialSpan = document.getElementById('historial');

function actualizarUI(texto) {
  mensaje.textContent = texto;
  intentosSpan.textContent = intentos;
  historialSpan.textContent = historial.join(', ');
}

botonAdivinar.addEventListener('click', () => {
  const numeroJugador = parseInt(inputNumero.value);

  if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
    mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
    return;
  }

  intentos++;
  historial.push(numeroJugador);

  if (numeroJugador === numeroSecreto) {
    actualizarUI('🎉 ¡Felicidades! ¡Adivinaste el número!');
    botonAdivinar.disabled = true;
  } else if (numeroJugador < numeroSecreto) {
    actualizarUI('🔼 El número es más alto.');
  } else {
    actualizarUI('🔽 El número es más bajo.');
  }

  inputNumero.value = '';
  inputNumero.focus();
});

botonReiniciar.addEventListener('click', () => {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
  historial = [];
  mensaje.textContent = '';
  intentosSpan.textContent = '0';
  historialSpan.textContent = '';
  botonAdivinar.disabled = false;
  inputNumero.value = '';
  inputNumero.focus();
});