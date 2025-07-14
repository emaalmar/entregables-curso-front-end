
document.getElementById('registroEvento').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se envíe automáticamente el formulario

    // Obtener valores del formulario
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
    const mensajeError = document.getElementById('mensaje-error');

    // Validaciones
    if (!nombre || !apellidoPaterno || !apellidoMaterno || !correo || !telefono || intereses.length === 0 || !horario || !fecha || !hora) {
        mensajeError.textContent = 'Por favor, completa todos los campos obligatorios.';
        mensajeError.style.color = 'red';
        return;
    }

    if (nombre.length <= 2 || apellidoPaterno.length <= 2 || apellidoMaterno.length <= 2) {
        mensajeError.textContent = 'Los nombres y apellidos deben tener al menos 3 caracteres. Usa "N/A" si no aplica.';
        mensajeError.style.color = 'red';
        return;
    }

    const correoCorrecto = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoCorrecto.test(correo)) {
        mensajeError.textContent = 'Ingresa un correo electrónico válido.';
        mensajeError.style.color = 'red';
        return;
    }

    const telefonoCorrecto = /^\d{10}$/;
    if (!telefonoCorrecto.test(telefono)) {
        mensajeError.textContent = 'El número de teléfono debe contener exactamente 10 dígitos.';
        mensajeError.style.color = 'red';
        return;
    }

    const fechaSeleccionada = new Date(fecha);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    if (fechaSeleccionada < hoy) {
        mensajeError.textContent = 'La fecha del evento no puede ser en el pasado.';
        mensajeError.style.color = 'red';
        return;
    }

    if (archivo) {
        const tiposPermitidos = ['image/jpeg', 'image/png', 'application/pdf'];
        const tamMaximo = 2 * 1024 * 1024; // 2 MB

        if (!tiposPermitidos.includes(archivo.type)) {
            mensajeError.textContent = 'El archivo debe ser JPG, PNG o PDF.';
            mensajeError.style.color = 'red';
            return;
        }

        if (archivo.size > tamMaximo) {
            mensajeError.textContent = 'El archivo no debe superar los 2MB.';
            mensajeError.style.color = 'red';
            return;
        }
    }

    // Mostrar mensaje de éxito
    mensajeError.style.color = 'green';
    mensajeError.textContent = 'Registro exitoso. ¡Gracias por registrarte!';

    // Aquí podrías enviar los datos al servidor con fetch si lo necesitas

    // formulario.reset(); // Descomenta si quieres limpiar el formulario después
});