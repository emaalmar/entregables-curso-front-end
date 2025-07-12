/* Functional Components en React
¿Qué son los Functional Components ?
    En React, los Functional Components son funciones de JavaScript que devuelven JSX.Son la forma más sencilla de definir componentes y se utilizan ampliamente debido a su sintaxis simple y facilidad de mantenimiento.

Antes de la introducción de los Hooks en React 16.8, los Functional Components eran considerados componentes sin estado, ya que no podían manejar un state interno ni usar métodos del ciclo de vida.Sin embargo, hoy en día pueden gestionar estado y efectos secundarios gracias a los Hooks.

Ejemplo de un Functional Component: */

// function Saludo() {
//     return <h1>¡Hola, mundo!</h1>;
// }

/* Comparación con los Class Components
Antes de los Functional Components, la forma más común de crear componentes en React era utilizando clases.Los Class Components utilizan la sintaxis de class en JavaScript y requieren el uso de this para acceder a props y state.

Ejemplo de un Class Component: */

// class Saludo extends React.Component {

//     render() {
//         return <h1>¡Hola, mundo!</h1>;
//     }

// }

/* Diferencias clave:
    Sintaxis: Los Functional Components son más concisos y fáciles de leer.
Uso de this : Los Class Components requieren this para acceder a props,         mientras que los Functional Components no.
    Hooks   : Los Functional Components pueden usar Hooks(useState, useEffect), mientras que los Class Components dependen de los métodos del ciclo de vida.
Creación de un Functional Component
Los Functional Components son simplemente funciones que devuelven JSX.Veamos un ejemplo: */

// function Mensaje() {
//     return <p>Este es un mensaje dentro de un Functional Component.</p>;
// }

// export default Mensaje;

/* Para usar este componente en una aplicación, lo importamos en App.jsx: */

/* import Mensaje from './Mensaje';

function App() {
    return (
        <div>
            <h1>Mi Aplicación</h1>
            <Mensaje />
        </div>
    );
}

export default App; */

/* Uso de Props en Functional Components
Al igual que los componentes de clase, los Functional Components pueden recibir props para hacerlos reutilizables y dinámicos, este tema se verá un poco más adelante con mayor detalle. 

    Ejemplo:*/

// Tarjeta.jsx:
// function Tarjeta(props) {
//     return (
//         <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
//             <h2>{props.titulo}</h2>
//             <p>{props.descripcion}</p>
//         </div>
//     );
// }

// export default Tarjeta;

// Uso en App.jsx:
// import Tarjeta from './Tarjeta';

// function App() {
//     return (
//         <div>
//             <Tarjeta titulo="React" descripcion="Una biblioteca para construir interfaces de usuario." />
//             <Tarjeta titulo="JavaScript" descripcion="El lenguaje de la web." />
//         </div>
//     );
// }

// export default App;