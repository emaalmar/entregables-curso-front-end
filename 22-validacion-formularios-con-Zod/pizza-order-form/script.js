const { z } = window.Zod;
// import { z } from "zod";

// Definir esquema de validación con Zod
const pizzaSchema = z.object({
    name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres.'),

    size: z.enum(
        ['pequeña', 'mediana', 'grande'],
        'Debes seleccionar un tamaño válido.'
    ),

    ingredients: z.array(z.string()).optional(),

    quantity: z
        .number()
        .int()
        .min(1, 'Debes pedir al menos 1 pizza.')
        .max(10, 'Máximo 10 pizzas por pedido.'),
});

// Seleccionar elementos del DOM
const form = document.getElementById('pizzaForm');
const nameInput = document.getElementById('name');
const sizeInput = document.getElementById('size');
const quantityInput = document.getElementById('quantity');
const errorMessage = document.getElementById('errorMessage');

// Manejar el envío del formulario

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar recarga de página // Capturar ingredientes seleccionados

    const selectedIngredients = Array.from(
        document.querySelectorAll("input[name='ingredients']:checked")
    )
        .map((checkbox) => checkbox.value); // Capturar valores del formulario

    const formData = {
        name: nameInput.value.trim(),
        size: sizeInput.value,
        ingredients: selectedIngredients,
        quantity: Number(quantityInput.value),
    }; // Validar datos con Zod

    const result = pizzaSchema.safeParse(formData);

    if (!result.success) {
        // Mostrar errores

        errorMessage.textContent = result.error.issues
            .map((issue) => issue.message)
            .join(', ');
    } else {
        // Si todo es válido, mostrar mensaje de éxito
        alert(`Pedido confirmado 🎉\n${JSON.stringify(formData, null, 2)}`);
        form.reset()
        errorMessage.textContent = '';
    }
});

/*Explicación Paso a Paso
Definir el esquema con Zod
name: Debe ser un string de al menos 3 caracteres.
size: Debe ser uno de los valores permitidos en el enum ("pequeña", "mediana", "grande").
ingredients: Es un array de strings y es opcional.
quantity: Debe ser un número entre 1 y 10.
Capturar valores del formulario
Se obtiene el valor de cada input y se convierte en el formato adecuado.
Los ingredientes seleccionados se obtienen como un array.
Validar con safeParse()
Si success: false, mostramos los errores en pantalla.
Si success: true, mostramos un mensaje con el pedido confirmad*/