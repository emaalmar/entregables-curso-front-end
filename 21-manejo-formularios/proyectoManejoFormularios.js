
const formulario = document.getElementById('registroEvento');


formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Variables
    const nombre = document.getElementById('nombre').value.trim();
    const apellidoPaterno = document.getElementById('apellido_paterno').value.trim();
    const apellidoMaterno = document.getElementById('apellido_materno').value.trim();

    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    const archivo = document.getElementById('archivo').files[0];

    // Validaciones básicas
    if (!nombre || !apellidoPaterno || !apellidoMaterno || !correo || !telefono || intereses.length === 0 || !horario) {
        document.getElementById('mensaje-error').textContent = 'Por favor, completa todos los campos obligatorios.';
        return;
    }

    if (nombre.length <= 2 || apellidoPaterno.length <= 2 || apellidoMaterno.length <= 2) {
        document.getElementById('mensaje-error').textContent = `Todos los campos de nombre y apellidos deben tener al menos 3 caracteres. Si no aplica, escribe "N/A".`;
        return;
    }

    const correoCorrecto = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoCorrecto.test(correo)) {
        document.getElementById('mensaje-error').textContent = 'Ingresa un correo electrónico válido.';
        return;
    }

    const telefonoCorrecto = /^\d{10}$/;
    if (!telefonoCorrecto.test(telefono)) {
        document.getElementById('mensaje-error').textContent = 'El número de teléfono debe contener exactamente 10 dígitos.';
        return;
    }

    if (intereses.length === 0) {
        document.getElementById('mensaje-error').textContent = 'Selecciona al menos un interés.';
        return;
    }

    if (!horario) {
        document.getElementById('mensaje-error').textContent = 'Selecciona un horario preferido.';
        return;
    }

    const fechaSeleccionada = new Date(fecha);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Ignora la hora
    if (fechaSeleccionada < hoy) {
        document.getElementById('mensaje-error').textContent = 'La fecha del evento no puede ser en el pasado.';
        return;
    }

    if (archivo) {
        const tiposPermitidos = ['image/jpeg', 'image/png', 'application/pdf'];
        const tamMaximo = 2 * 1024 * 1024; // 2MB

        if (!tiposPermitidos.includes(archivo.type)) {
            document.getElementById('mensaje-error').textContent = 'El archivo debe ser JPG, PNG o PDF.';
            return;
        }

        if (archivo.size > tamMaximo) {
            document.getElementById('mensaje-error').textContent = 'El archivo no debe superar los 2MB.';
            return;
        }
    }

    // Si todo está bien
    document.getElementById('mensaje-error').textContent = 'Registro exitoso. ¡Gracias por registrarte!';
    document.getElementById('mensaje-error').style.color = 'green';
    document.getElementById('mensaje-error').textContent = '';
});


