
// Importamos Zod
const { z } = window.Zod;

// Esquema para validar los datos del formulario
const registerSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email("Correo electronico invalido"),
    password: z.string().min(6, "contraseña minima de 6 caracteres")

});

document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();

    // Capturamos los valores ingresados
    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value.trim(),
    };

    try {
        registerSchema.parse(formData);
        alert("¡Registro exitoso!");
    } catch (error) {
        // PISTA: Muestra los mensajes de error en la página.
        document.getElementById("errors").textContent = error.errors.map(e => e.message).join(", ");
    }
});
