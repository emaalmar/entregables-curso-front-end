Creando un CRUD Básico con Express
Introducción
En el desarrollo web moderno, el concepto de CRUD (Crear, Leer, Actualizar, Eliminar) es fundamental, ya que permite interactuar con bases de datos a través de aplicaciones. En este tutorial, aprenderemos cómo crear un CRUD básico utilizando Express, un framework minimalista y flexible para Node.js. Con Express, podemos configurar rápidamente servidores web y gestionar rutas de forma sencilla.

Al final de esta lectura, serás capaz de crear una API RESTful básica que interactúa con una base de datos utilizando las operaciones CRUD.

Configuración del Proyecto
Lo primero es asegurarnos de tener Node.js instalado en tu sistema. Luego, crearemos un nuevo proyecto y agregaremos las dependencias necesarias.

Inicializar el Proyecto
Abre una terminal y ejecuta los siguientes comandos:

mkdir crud-express

cd crud-express

npm init -y
Esto inicializa un proyecto Node.js y crea un archivo package.json con la configuración predeterminada.

Instalar las Dependencias
Para crear el CRUD, necesitaremos Express. También utilizaremos body-parser para analizar los cuerpos de las solicitudes HTTP. Ejecútalo con el siguiente comando:

npm install express body-parser
Estructura Básica de Express
Crea un archivo llamado app.js en el directorio raíz de tu proyecto. Este archivo será el corazón de nuestra API.

Código de app.js:
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = 3000;

// Middleware

app.use(bodyParser.json());

// Rutas

app.get('/', (req, res) => {

    res.send('Hola, mundo!');

});

app.listen(port, () => {

    console.log(`Servidor corriendo en http://localhost:${port}`);

});
Aquí hemos configurado un servidor Express básico que escucha en el puerto 3000 y responde con un mensaje de bienvenida cuando se accede a la ruta raíz.

Implementando el CRUD
Ahora vamos a agregar las operaciones CRUD. Para simplificar, usaremos un array en memoria como base de datos.

Crear (POST)
La operación Crear permite agregar un nuevo elemento a nuestra "base de datos". Implementaremos esta funcionalidad en una ruta POST.

let items = [];

app.post('/items', (req, res) => {

    const item = req.body;

    items.push(item);

    res.status(201).send(item);

});
Este código recibe un objeto item en el cuerpo de la solicitud y lo agrega al array items. Luego, responde con el objeto creado y un código de estado 201 (Creado).

Leer (GET)
La operación Leer permite obtener todos los elementos almacenados en la "base de datos". Implementaremos esta funcionalidad en una ruta GET.

app.get('/items', (req, res) => {

    res.status(200).json(items);

});
Esta ruta devuelve todos los elementos en el array items en formato JSON con un código de estado 200 (Éxito).

Actualizar (PUT)
La operación Actualizar permite modificar un elemento existente. Para ello, necesitamos una ruta PUT que reciba el identificador del elemento a actualizar.

app.put('/items/:id', (req, res) => {

    const { id } = req.params;

    const updatedItem = req.body;

    let item = items.find(i => i.id === parseInt(id));

    if (item) {

        item = { ...item, ...updatedItem };

        items = items.map(i => (i.id === parseInt(id) ? item : i));

        res.status(200).json(item);

    } else {

        res.status(404).send('Item no encontrado');

    }

});
En este ejemplo, buscamos el item por su id y luego lo actualizamos con los nuevos valores. Si el item no existe, respondemos con un error 404.

Eliminar (DELETE)
La operación Eliminar permite borrar un elemento de la "base de datos". Implementamos esto en una ruta DELETE.

app.delete('/items/:id', (req, res) => {

    const { id } = req.params;

    items = items.filter(i => i.id !== parseInt(id));

    res.status(200).send('Item eliminado');

});
Aquí eliminamos el item cuyo id coincida con el proporcionado en la URL. Si el item se elimina correctamente, respondemos con un mensaje de confirmación.

Casos de Uso en el Mundo Real
Aplicaciones de Gestión de Productos: Puedes utilizar este CRUD básico para gestionar inventarios de productos. Los usuarios pueden agregar nuevos productos, consultar los existentes, actualizarlos y eliminarlos.

Aplicaciones de Tareas o Notas: Este sistema CRUD se puede aplicar para crear aplicaciones donde los usuarios gestionan tareas o notas, como una aplicación de to-do list.

Sistemas de Comentarios o Reseñas: Un CRUD similar se puede implementar en plataformas de comentarios, donde los usuarios pueden crear, ver, modificar o eliminar comentarios.

Conclusión
Hemos cubierto cómo crear un CRUD básico usando Express. Este patrón es fundamental en el desarrollo de aplicaciones web, y Express hace que sea fácil implementarlo gracias a su simplicidad y flexibilidad. A medida que avanzas, puedes mejorar este CRUD agregando una base de datos real, validación de datos, manejo de errores y autenticación de usuarios.