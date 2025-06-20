// Datos iniciales de libros en formato JSON
// PARA INICIAR EL "package.json" DE ESTE EJERCICIO, EJECUTAR EL COMANDO "npm init -y" EN LA TERMINAL
let biblioteca = {
    "libros": [
        {
            "titulo": "Cien años de soledad",
            "autor": "Gabriel García Márquez",
            "genero": "Realismo mágico",
            "disponible": true
        },
        {
            "titulo": "1984",
            "autor": "George Orwell",
            "genero": "Distopía",
            "disponible": true
        }
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        // Aquí simulas leer el JSON con un retraso de 1 segundo
        console.log("Leyendo datos de la biblioteca...");
        // Llamas al callback con los datos leídos
        callback(biblioteca);
    }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    // Aquí falta la simulación de escribir el libro en el "archivo" (es decir, agregarlo al objeto)
    console.log(`Agregando libro: ${titulo} por ${autor}, género: ${genero}, disponible: ${disponible}`);
    // Simula un retraso antes de agregar el libro
    setTimeout(() => {
        // Pista: deberías agregar el nuevo libro a `biblioteca.libros`
        /* biblioteca.libros.push(nuevoLibro);
        console.log(`Libro "${titulo}" agregado exitosamente.`); */
        biblioteca.libros.push(nuevoLibro);
        escribirDatos(biblioteca, (datosGuardados) => {
            console.log(`Libro ${titulo} guardado exitosamente.`);
        });

    }, 1000);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    // Simula un retraso antes de actualizar la disponibilidad

    setTimeout(() => {
        // Pista: busca el libro por título y cambia la propiedad 'disponible' a nuevoEstado
        const libro = biblioteca.libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
        if (libro) {
            libro.disponible = nuevoEstado;

            escribirDatos(biblioteca, () => {
                console.log(`Disponibilidad de "${titulo}" actualizada a ${nuevoEstado ? 'Disponible' : 'No disponible'}.`);
                mostrarLibros();
            });
        } else {
            console.log(`El libro "${titulo}" no se encontró en la biblioteca.`);
        }
    }, 1000);

}

function escribirDatos(datos, callback) {
    setTimeout(() => {
        console.log("Escribiendo datos en el archivo...")
        callback(datos)
    }, 1000);
}

// Ejemplo de cómo ejecutar la aplicación
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
// actualizarDisponibilidad("cien años de Soledad", false);
mostrarLibros();