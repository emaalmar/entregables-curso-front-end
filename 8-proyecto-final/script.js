//Local Storage
/*El localStorage es una API de almacenamiento en el navegador que permite guardar pares clave-valor de forma persistente.
Los datos se mantienen incluso después de cerrar el navegador, haciéndolo ideal para conservar configuraciones, carritos de compras y más.
 */

// --------------------------------------------- Métodos Comunes ----------------------------------------------

/*//1. Guardar Datos: setItem(key, value)
//Guarda un valor asociado a una clave.
localStorage.setItem('nombre', 'Carlos');

//2.Recuperar Datos: getItem(key)
//Obtiene el valor almacenado en localStorage usando su clave.
const nombre = localStorage.getItem('nombre');
console.log(nombre); // "Carlos"

//3. Eliminar Datos Específicos: removeItem(key)
//Elimina el dato asociado a una clave específica.
        //localStorage.removeItem('nombre');

//4. Eliminar Todos los Datos: clear()
//Borra todo el contenido almacenado en localStorage.
        //localStorage.clear();

//5. Obtener Clave por Índice: key(index)
//Devuelve la clave almacenada en un índice específico.
const clave = localStorage.key(0);
console.log(clave); // Por ejemplo: "nombre"
*/
// ------------------------------------------ Ejemplos Practicos --------------------------------------------------

/*//1. Guardar y Recuperar Datos
// Guardar datos
localStorage.setItem('nombre', 'Carlos');
localStorage.setItem('edad', '30');

// Recuperar datos
console.log(localStorage.getItem('nombre')); // "Carlos"
console.log(localStorage.getItem('edad'));   // "30"
*/

/*//2. Almacenar Objetos
// Guardar un objeto
const usuario = { nombre: 'Carlos', edad: 30 };
localStorage.setItem('usuario', JSON.stringify(usuario));

// Recuperar el objeto
const datosUsuario = JSON.parse(localStorage.getItem('usuario'));
console.log(datosUsuario.nombre); // "Carlos"
console.log(datosUsuario.edad);  // 30
*/

/*//3. Eliminar Datos
// Guardar y eliminar un dato
localStorage.setItem('tema', 'oscuro');
console.log(localStorage.getItem('tema')); // "oscuro"

localStorage.removeItem('tema');
console.log(localStorage.getItem('tema')); // null
*/

/*//4. Limpiar Todo
// Guardar múltiples datos
localStorage.setItem('nombre', 'Carlos');
localStorage.setItem('edad', '30');
console.log(localStorage.length); // 2

// Eliminar todo
localStorage.clear();
console.log(localStorage.length); // 0
*/

/*//5. Iterar Sobre Claves y Valores
// Guardar datos
localStorage.setItem('nombre', 'Carlos');
localStorage.setItem('edad', '30');

// Iterar sobre los datos
for (let i = 0; i < localStorage.length; i++) {
    const clave = localStorage.key(i);
    console.log(`${clave}: ${localStorage.getItem(clave)}`);
}
// Salida:
// nombre: Carlos
// edad: 30
*/

//