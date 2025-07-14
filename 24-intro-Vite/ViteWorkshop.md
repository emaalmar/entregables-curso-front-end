## Workshop: ¡Crea tu propio "Adivina el número" con Vite!
¡Manos a la Obra! Sigue las siguientes instrucciones para la elaboración de tu proyecto con Node.js y Vite usando vanilla JavaScript.

#### Objetivo

Aprender a crear un proyecto con Vite, comprender su estructura básica y practicar el uso de Vanilla JS para manipular el DOM y crear interactividad en una página web.

#### Instrucciones paso a paso

1.  **Crea el proyecto con Vite:**

    Abre tu terminal y navega a la carpeta donde quieres crear tu proyecto. Luego, ejecuta el siguiente comando:

    ```bash
    npm create vite@latest adivina-el-numero
    ```
    Selecciona `Vanilla` en la opción de frameworks y después `JavaSript` en la opción *Select a variant*.

    Esto creará un nuevo proyecto llamado "adivina-el-numero" con la plantilla de Vanilla JS.

2.  **Instala las dependencias:**

    Navega a la carpeta del proyecto recién creado:

    ```bash
    cd adivina-el-numero
    ```

    E instala las dependencias:

    ```bash
    npm install
    ```

3.  **Abre el proyecto en tu editor de código:**

    Abre la carpeta del proyecto en tu editor de código favorito (VS Code, Sublime Text, Atom, etc.).

4.  **Modifica el archivo `index.html`:**

    Reemplaza el contenido del archivo `index.html` con el siguiente código:

    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Adivina el número</title>
    </head>
    <body>
        <h1>Adivina el número</h1>
        <p>La computadora ha generado un número entre 1 y 100. ¡Adivínalo!</p>
        <input type="number" id="numero">
        <button id="adivinar">Adivinar</button>
        <p id="mensaje"></p>
        <script type="module" src="/main.js"></script>
    </body>
    </html>
    ```

5.  **Crea el archivo `main.js`:**

    Crea un nuevo archivo llamado `main.js` en la raíz de tu proyecto y pega el siguiente código:

    ```javascript
    import './style.css';

    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    const inputNumero = document.getElementById('numero');
    const botonAdivinar = document.getElementById('adivinar');
    const mensaje = document.getElementById('mensaje');

    botonAdivinar.addEventListener('click', () => {
        const numeroJugador = parseInt(inputNumero.value);

        if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
            mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        } else if (numeroJugador === numeroSecreto) {
            mensaje.textContent = '¡Felicidades! ¡Adivinaste el número!';
        } else if (numeroJugador < numeroSecreto) {
            mensaje.textContent = 'El número es más alto.';
        } else {
            mensaje.textContent = 'El número es más bajo.';
        }
    });
    ```

6.  **Agrega estilos (opcional):**

    Crea un archivo llamado `style.css` en la raíz de tu proyecto y agrega estilos CSS para mejorar la apariencia del juego. Por ejemplo:

    ```css
    body {
        font-family: sans-serif;
        text-align: center;
    }

    #numero {
        padding: 5px;
        margin-right: 10px;
    }

    button {
        padding: 5px 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
    }

    #mensaje {
        margin-top: 10px;
        font-weight: bold;
    }
    ```

7.  **Inicia el servidor de desarrollo:**

    En tu terminal, ejecuta el siguiente comando para iniciar el servidor de desarrollo de Vite:

    ```bash
    npm run dev
    ```

    Vite abrirá automáticamente tu navegador con el juego "Adivina el número".

## ¡Juega y experimenta!

Ahora puedes jugar "Adivina el número" y experimentar con el código. Intenta modificar los estilos, agregar más funcionalidades o incluso cambiar la lógica del juego. ¡Las posibilidades son infinitas!