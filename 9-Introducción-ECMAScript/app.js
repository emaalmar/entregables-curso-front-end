/*//app.js
// Iniciar la aplicación
function iniciarApp() {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();*/
import { registrarDestino, mostrarItinerario, calcularCosto } from './viajes.js'

const iniciarApp = ()=>{
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");

    mostrarItinerario();
};

//Ejecutar la aplicación
iniciarApp();

// console.log(calcularCosto("Londres", "Tren"));

// registrarDestino("Paris", "2024-06-15", "Tren");

// mostrarItinerario();