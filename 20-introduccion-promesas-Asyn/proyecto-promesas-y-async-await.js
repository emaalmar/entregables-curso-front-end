// Aquí tienes un código incompleto para tomar como base. Cada función está definida, pero los pasos cruciales aún no están implementados.

// Simulando una base de datos de mesas
let mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mesasSolicitadas <= mesasDisponibles) {
                resolve("Contamos con disponibilidad de mesas");
            } else {
                reject(`Lo lamentamos, en este momento solo tenemos esta disponibilidad ${mesasDisponibles} `)
            };

        }, 2000);  // Simula un retraso en la verificación (2 segundos)
    });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.2
            if (exito) {
                resolve(`Corre enviado a ${nombreCliente}`)
            } else {
                reject(`Error al enviar el correo, verifica la informacion e intenta de nuevo`)
            }
        }, 1500);  // Simula el envío de un correo (1.5 segundos)
    });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
    try {
        console.log("Verificando disponibilidad de mesas...");
        const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);  // Llama a la función de verificación
        console.log(disponibilidad);

        mesasDisponibles -= mesasSolicitadas;

        console.log("Enviando confirmación por correo ...")
        const confirmación = await enviarConfirmacionReserva(nombreCliente);
        console.log(confirmación)

        console.log("Reserva realizada. Gracias")
    } catch (error) {
        // Verificamos si el error es por falta de disponibilidad o por otra razón
        if (error.includes("disponibilidad")) {
            console.log(error); // Solo mostramos el mensaje, sin el prefijo "Error:"
        } else {
            console.log("Error:", error); // Aquí sí es un error real (correo, por ejemplo)
        }
    }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 5);  // Intenta hacer una reserva para 3 personas