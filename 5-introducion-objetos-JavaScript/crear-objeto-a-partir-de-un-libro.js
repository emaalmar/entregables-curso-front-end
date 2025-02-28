class Libro {
    constructor(titulo, autor, anio, estado = "disponible") {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
        this.capitulos = []; // Nueva propiedad para almacenar capítulos
    }

    // Método para describir el libro
    describirLibro() {
        return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
    }

    // Método para agregar un capítulo
    agregarCapitulo(capitulo) {
        if (!capitulo) {
            return "Error: El capítulo no puede estar vacío.";
        }
        this.capitulos.push(capitulo);
        return `Capítulo "${capitulo}" agregado correctamente.`;
    }

    // Método para eliminar un capítulo
    eliminarCapitulo(capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index === -1) {
            return `Error: El capítulo "${capitulo}" no existe en el libro.`;
        }
        this.capitulos.splice(index, 1);
        return `Capítulo "${capitulo}" eliminado correctamente.`;
    }

    // Método para mostrar los capítulos
    listarCapitulos() {
        return this.capitulos.length > 0
            ? `Capítulos del libro "${this.titulo}": ${this.capitulos.join(", ")}`
            : `El libro "${this.titulo}" no tiene capítulos agregados.`;
    }
}

// Crear un libro
let libroEscogido = new Libro("El Principito", "Antoine de Saint-Exupéry", 1943, "disponible");

// Mostrar información del libro
console.log(libroEscogido.describirLibro());

// Agregar capítulos
console.log(libroEscogido.agregarCapitulo("Capítulo 1: El encuentro con el aviador"));
console.log(libroEscogido.agregarCapitulo("Capítulo 2: El zorro y la rosa"));

// Listar capítulos
console.log(libroEscogido.listarCapitulos());

// Eliminar un capítulo
console.log(libroEscogido.eliminarCapitulo("Capítulo 1: El encuentro con el aviador"));

// Mostrar nuevamente los capítulos
console.log(libroEscogido.listarCapitulos());