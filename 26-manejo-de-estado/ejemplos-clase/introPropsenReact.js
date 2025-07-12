/* Introducción a Props en React
¿Qué son las Props ?
    En React, "props"(abreviatura de "properties") son la forma en que los componentes pueden recibir datos desde un componente padre.Las props permiten que los componentes sean más reutilizables y dinámicos, ya que pueden recibir diferentes valores y renderizar contenido personalizado en cada caso.

Las props son inmutables, lo que significa que un componente no puede modificar sus propias props; solo el componente padre puede cambiarlas al pasarle nuevos valores.

¿Cómo se Usan las Props ?
    Las props se envían a los componentes como atributos en la etiqueta del componente y se acceden dentro del componente receptor mediante el objeto props.

Ejemplo Básico de Props
Imaginemos que queremos mostrar un mensaje personalizado en un componente de React.Podemos hacerlo usando props de la siguiente manera:

1. Definir el Componente Mensaje.jsx

function Mensaje(props) {

    return <h2>{props.texto}</h2>;

}

export default Mensaje;
En este caso, el componente Mensaje recibe un valor a través de props.texto y lo muestra dentro de un encabezado < h2 >.

2. Usar el Componente en App.jsx

import Mensaje from './Mensaje';

function App() {

    return (

        <div>

            <h1>Ejemplo de Props en React</h1>

            <Mensaje texto="¡Hola, mundo!" />

            <Mensaje texto="Bienvenido a React" />

        </div>

    );

}

export default App;
En este ejemplo:

Pasamos diferentes valores a la prop texto en cada instancia del componente Mensaje.
Cada componente renderiza un mensaje distinto según el valor recibido.
Props en Componentes con Múltiples Valores
Las props también pueden contener múltiples valores, como en este ejemplo donde mostramos una tarjeta de usuario:

1. Definir el Componente TarjetaUsuario.jsx

function TarjetaUsuario(props) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h2>{props.nombre}</h2>
            <p>Edad: {props.edad}</p>
            <p>Ocupación: {props.ocupacion}</p>
        </div>
    );
}

export default TarjetaUsuario;
En este componente, se utiliza el atributo style para agregar estilos en línea(inline) al div.En React, los estilos en línea se definen como un objeto de JavaScript en lugar de una cadena de texto como en HTML tradicional.Cada propiedad de estilo debe escribirse en camelCase, por ejemplo:

border: '1px solid #ccc' en lugar de border: 1px solid #ccc;
padding: '10px' en lugar de padding: 10px;
margin: '10px' en lugar de margin: 10px;
Este enfoque permite usar variables y lógica de JavaScript dentro del objeto de estilos, brindando mayor flexibilidad.

2. Usar el Componente en App.jsx

import TarjetaUsuario from './TarjetaUsuario';

function App() {
    return (
        <div>
            <h1>Usuarios</h1>
            <TarjetaUsuario nombre="Ana Pérez" edad={28} ocupacion="Ingeniera de Software" />
            <TarjetaUsuario nombre="Carlos Gómez" edad={35} ocupacion="Diseñador UX" />
        </div>
    );
}

export default App;
En este caso, TarjetaUsuario recibe tres props(nombre, edad y ocupacion) y las usa para mostrar información personalizada.

    Conclusión
Las props en React son una herramienta fundamental para construir componentes dinámicos y reutilizables.Permiten que los datos fluyan de un componente padre a un componente hijo, facilitando la modularización y la escalabilidad en el desarrollo de aplicaciones. */