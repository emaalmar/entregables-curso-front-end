const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
    let notas = [];

    if (fs.existsSync(filePath)) {
        // PISTA: Aquí debes leer las notas existentes antes de agregar la nueva.
        // COMPLETAR: Usa fs.readFileSync para leer el archivo.
        const data = fs.readFileSync(filePath, 'utf8');
        notas = data.trim() === '' ? [] : JSON.parse(data);
    }

    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);

    // PISTA: Ahora debes sobrescribir el archivo con las notas actualizadas.
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
    console.log('Nota agregada con éxito.');

    // COMPLETAR: Usa fs.writeFileSync para guardar las notas.
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
    if (fs.existsSync(filePath)) {
        // PISTA: Debes leer y parsear el contenido del archivo.
        // COMPLETAR: Usa fs.readFileSync para leer y JSON.parse para convertir el contenido.
        const data = fs.readFileSync(filePath, 'utf8');
        const notas = data.trim() === '' ? [] : JSON.parse(data);

        if (notas.length === 0) {
            console.log('No hay notas guardadas.');
            return;
        }

        console.log('Notas guardadas:');
        notas.forEach((nota, index) => {
            console.log(`${index + 1}. Título: ${nota.titulo} - Contenido: ${nota.contenido}`);
        });


    } else {
        console.log('No existen notas.');
    }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {


    if (fs.existsSync(filePath)) {
        // PISTA: Primero lee todas las notas.
        // COMPLETAR: Usa fs.readFileSync para leer el archivo.

        // PISTA: Filtra las notas y elimina la que coincida con el título.
        // COMPLETAR: Usa Array.filter para obtener las notas restantes.

        // PISTA: Sobrescribe el archivo con las notas actualizadas.
        // COMPLETAR: Usa fs.writeFileSync.
        const data = fs.readFileSync(filePath, 'utf8');
        const notas = data.trim() === '' ? [] : JSON.parse(data);

        const notasRestantes = notas.filter(nota => nota.titulo !== titulo)

        if (notasRestantes.length === notas.length) {
            console.log(`No se ha encontrado ninguna nota con el ${titulo}.`)
            return;
        }

        fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
        console.log(`Nota con título "${titulo}" eliminada.`);
    } else {
        console.log('No existen notas para eliminar.');
    }
}



// Ejecución de ejemplo
agregarNota('Compras', 'Comprar leche y pan.');
listarNotas();
// eliminarNota('Compras');
// listarNotas();



// ### Pistas para Resolver el Proyecto ###
// Formato del archivo `notas.json`:
// [
//     { "titulo": "Compras", "contenido": "Comprar leche y pan." },
//     { "titulo": "Trabajo", "contenido": "Terminar reporte semanal." }
// ]

// #### Operaciones clave: ###
// 1. Para leer las notas existentes:
// const data = fs.readFileSync(filePath, 'utf8');
// const notas = JSON.parse(data);

// 2. Para guardar las notas actualizadas:
// fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));

// 3. Filtrar notas para eliminar:
// const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);