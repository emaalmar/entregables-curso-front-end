//viajes.js

export { registrarDestino, mostrarItinerario, calcularCosto };

// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
const registrarDestino = (destino, fecha, transporte) => {
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte),
        descuento: calcularDescuento(destino, transporte)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje

const calcularCosto = ( destino, transporte) =>{
    const costosDestino = {
        "Paris": 500,
        "Londres": 400,
        "New York": 600
    };

    const costosTransporte ={
        "Avión": 200,
        "Tren": 100
    };

    const costoBase = (costosDestino[destino] || 0 ) + (costosTransporte[transporte] || 0);
    const descuento = calcularDescuento(destino, transporte, costoBase)

    return costoBase - descuento;
};

const calcularDescuento = (destino, transporte, costoBase) =>{
    if (destino === "Paris" && transporte == "Tren" ) {
        return costoBase * 0.1;
    }
    return 0
};

// Función para mostrar el itinerario de los viajes registrados

const mostrarItinerario = () => {
    destinos.forEach(viaje => {
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo base: $${viaje.costo + (viaje.descuento || 0)}`);
        if(viaje.descuento > 0){
            console.log(`Descuento: -$${viaje.descuento}`);
            console.log(`Total a pagar: $${viaje.costo}`);
        };
        console.log("---------------------------");
    });
};


// Función para registrar un destino de viaje
/*function registrarDestino(destino, fecha, transporte) {
    // Todo: Crear un objeto con los datos del destino
    var nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}*/

// Función para calcular el costo del viaje
/*function calcularCosto(destino, transporte) {
    var costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    return costoBase;
}

const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    return costoBase;

    const calcularCosto = (d, t) =>
    ({ "Paris":500, "Londres":400, "NY":600 }[d] || 0) +
    ({ "Avión":200, "Tren":100 }[t] || 0);

};*/

// Función para mostrar el itinerario de los viajes registrados
/*function mostrarItinerario() {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    for (var i = 0; i < destinos.length; i++) {
        var viaje = destinos[i];
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    }

    const mostrarItinerario = () => {
    for (let i = 0; i < destinos.length; i++) {
        const viaje = destinos [i];
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log("---------------------------");
    }
}

}*/


/*function iniciarApp() {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}*/