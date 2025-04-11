// Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.
let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    return `"${titulo} se agrego a la lista"`
}

console.log(agregarLibro("El principito"));
console.log(agregarLibro("Maze Runner"));


function mostrarLibrosLeidos() {
    return librosLeidos.length > 0
    ? `Libros leídos: ${librosLeidos.join(", ")}`
    : "Aun no has leido ningun libro.";
}
console.log(mostrarLibrosLeidos());