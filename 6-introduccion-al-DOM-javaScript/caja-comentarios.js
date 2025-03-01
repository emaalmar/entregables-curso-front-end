/*class Mensaje {
    constructor(name, msg) {
        this.name = name;
        this.msg = msg;
    }

    mostrarInfo() {
        // Obtener la hora actual
        const hora = new Date().toLocaleTimeString();
        const fecha = new Date().toLocaleDateString();  // Para agregar la fecha

        // Mostrar el mensaje con nombre, mensaje y hora
        return `${this.name} dijo: "${this.msg}" | Fecha: ${fecha} | Hora: ${hora}`;
    }
}

const formulario = document.getElementById("msg-form");
const listaMensajes = document.getElementById("mensajes-enviados");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario, para no recargar la página

    // Obtener los valores del formulario
    const nombre = document.getElementById("name").value;
    const mensaje = document.getElementById("msg").value;

    if (mensaje === "") {
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
*/

class Mensaje {
    constructor(name, msg) {
        this.name = name || "Anónimo"; // Si el nombre está vacío, usa "Anónimo"
        this.msg = msg;
        this.fechaHora = new Date(); // Guardamos la fecha y hora al momento de la creación
    }

    mostrarInfo() {
        // Formatear la fecha y hora
        const fecha = this.fechaHora.toLocaleDateString();
        const hora = this.fechaHora.toLocaleTimeString();

        return `${this.name} dijo: "${this.msg}" | Fecha: ${fecha} | Hora: ${hora}`;
    }
}

const formulario = document.getElementById("msg-form");
const listaMensajes = document.getElementById("mensajes-enviados");

formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar recargar la página

    // Obtener valores del formulario
    const nombre = document.getElementById("name").value.trim();
    const mensaje = document.getElementById("msg").value.trim();

    if (!mensaje) {
        alert("No hay mensaje para enviar.");
        return;
    }

    // Crear un nuevo mensaje
    const nuevoMensaje = new Mensaje(nombre, mensaje);

    // Crear elementos HTML para el mensaje y el botón de eliminar
    const item = document.createElement("li");
    item.textContent = nuevoMensaje.mostrarInfo();

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.style.marginLeft = "10px"; // Espaciado entre mensaje y botón

    // Evento para eliminar el comentario
    botonEliminar.addEventListener("click", function () {
        listaMensajes.removeChild(item);
    });

    // Agregar el botón dentro del <li>
    item.appendChild(botonEliminar);
    listaMensajes.appendChild(item);

    // Resetear formulario
    formulario.reset();
});



/*
    //Crear un elemento lista y agregarlo al DOM

    const item = document.createElement("li")

    let nuevoMensaje;
    if (msg === "") {
        return "no hay mensaje"
    }else{
        nuevoMensaje = new Mensaje(nombre, mensaje);
    }

    item.textContent = nuevoMensaje.mostrarInfo()
    listaMensajes.appendChild(item);

    formulario.reset();
})
/*