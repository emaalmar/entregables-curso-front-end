class Mensaje {
    constructor(name, msg) {
        this.name = name;
        this.msg = msg;
    }
    mostrarInfo() {
        // Obtener la hora actual
        const ahora = new Date();
        const hora = ahora.toLocaleTimeString();
        const fecha = ahora.toLocaleDateString();  // Para agregar la fecha

        // Mostrar el mensaje con nombre, mensaje y hora
        return `${this.name} dijo: "${this.msg}" | Fecha: ${fecha} | Hora: ${hora}`;
    }
}

const formulario = document.getElementById("msg-form");
const listaMensajes = document.getElementById("mensajes-enviados");


formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario, para no recargar la página

    // Obtener los valores del formulario
    const nombre = document.getElementById("user-name").value;
    const mensaje = document.getElementById("msg").value;


    if (mensaje.trim() === "") {
        alert("No hay mensaje para enviar.");
        return;
    }

    // Crear un nuevo objeto de la clase Mensaje
    const nuevoMensaje = new Mensaje(nombre, mensaje);

    // Crear un nuevo elemento <li> para mostrar el mensaje
    const item = document.createElement("li");
    item.textContent = nuevoMensaje.mostrarInfo();

    // Agregar el nuevo mensaje a la lista en el DOM
    listaMensajes.appendChild(item);

    // Resetear el formulario
    formulario.reset();
});