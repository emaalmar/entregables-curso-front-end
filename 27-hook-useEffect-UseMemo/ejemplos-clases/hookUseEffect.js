/* Hook useEffect
En React, los Hooks permiten agregar funcionalidades a los componentes funcionales sin necesidad de usar clases.Uno de los Hooks más importantes y utilizados es useEffect, el cual se emplea para manejar efectos secundarios en los componentes.

Antes de los Hooks, los efectos secundarios como llamadas a APIs, suscripciones a eventos y manipulación directa del DOM se realizaban dentro de los métodos del ciclo de vida de los componentes de clase, como componentDidMount, componentDidUpdate y componentWillUnmount.Con useEffect, podemos realizar estas operaciones de forma más sencilla y estructurada en componentes funcionales.

¿Qué es useEffect ?
    useEffect es un Hook que nos permite ejecutar efectos secundarios en un componente funcional.Los efectos secundarios son acciones que ocurren después de la renderización, como:

Llamadas a APIs para obtener datos.
Modificar el DOM manualmente.
Configurar y limpiar suscripciones a eventos.
La sintaxis básica de useEffect es:

import { useEffect } from "react";

useEffect(() => {

    // Código a ejecutar

});
Dependencias en useEffect
El segundo argumento de useEffect es un arreglo de dependencias que indica cuándo debe ejecutarse el efecto.

Ejecutar el efecto en cada renderizado
Si no se proporciona un segundo argumento, el efecto se ejecutará en cada renderizado.

    useEffect(() => {

        console.log("Este efecto se ejecuta en cada renderizado");

    });
Ejecutar el efecto solo una vez(equivalente a componentDidMount)
Si pasamos un arreglo vacío[], el efecto solo se ejecutará una vez, cuando el componente se monte.

    useEffect(() => {

        console.log("Este efecto se ejecuta solo una vez");

    }, []);
    
Ejecutar el efecto cuando cambie un estado o prop específica
Podemos pasar valores en el arreglo de dependencias para que el efecto se ejecute solo cuando estos valores cambien.

    const[contador, setContador] = useState(0);

useEffect(() => {

    console.log("El contador ha cambiado a:", contador);

}, [contador]);

Limpieza de efectos en useEffect
Algunos efectos requieren limpieza para evitar problemas como fugas de memoria.Para ello, useEffect puede devolver una función que se ejecutará antes de que el componente se desmonte o antes de ejecutar el efecto nuevamente.

    useEffect(() => {

        console.log("Suscribiendo evento");

        return () => {

            console.log("Limpiando evento");

        };

    }, []);
Casos de uso en el mundo real
El Hook useEffect es útil en múltiples escenarios, algunos ejemplos incluyen:

Obtener datos de una API: Para mostrar información dinámica en la aplicación.
Actualizar el título de la página: Personalizar la pestaña del navegador con información relevante.
Configurar temporizadores o intervalos: Para funcionalidades como actualizaciones en tiempo real.
Escuchar eventos del teclado o el mouse: Para detectar interacciones del usuario en tiempo real.
    Ejemplo: Obtener datos de una API con useEffect
import { useState, useEffect } from "react";

function DatosAPI() {

    const [datos, setDatos] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")

            .then(response => response.json())

            .then(data => setDatos(data));

    }, []);

    return (

        <div>

            <h2>Datos desde API</h2>

            <ul>

                {datos.map(post => (

                    <li key={post.id}>{post.title}</li>

                ))}

            </ul>

        </div>

    );

}

export default DatosAPI;
Conclusión
useEffect es un Hook esencial en React que permite manejar efectos secundarios de manera eficiente en componentes funcionales.Su uso adecuado mejora el rendimiento de la aplicación y facilita el mantenimiento del código.Comprender cómo y cuándo usar useEffect es clave para desarrollar aplicaciones interactivas y dinámicas en React. */