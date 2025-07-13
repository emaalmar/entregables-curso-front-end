Hooks Avanzados: useReducer
Introducción
El hook useReducer es una alternativa avanzada a useState para gestionar el estado en componentes funcionales de React. Se utiliza especialmente cuando el estado de un componente es complejo o cuando se deben manejar varias actualizaciones relacionadas entre sí. Su funcionamiento se basa en un reducer, similar al patrón Redux, permitiendo una gestión de estado predecible y estructurada.

En esta lectura, exploraremos en profundidad el uso de useReducer, sus ventajas, ejemplos prácticos y casos en los que resulta más beneficioso que useState.

useReducer
Características principales:
Es útil para gestionar estados complejos o con lógicas de actualización complejas.
Utiliza un reducer (función pura) para gestionar el estado.
Similar al patrón de Redux, pero sin necesidad de una configuración adicional.
Sintaxis básica:
import { useReducer } from 'react';

function reducer(state, action) {

  switch (action.type) {

    case 'increment':

      return { count: state.count + 1 };

    case 'decrement':

      return { count: state.count - 1 };

    default:

      return state;

  }

}

function Contador() {

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (

    <div>

      <p>Contador: {state.count}</p>

      <button onClick={() => dispatch({ type: 'increment' })}>+</button>

      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>

    </div>

  );

}
Componentes de useReducer:
Estado inicial: Define el estado antes de realizar cualquier actualización.
Reducer: Una función pura que recibe el estado y una acción, devolviendo el nuevo estado. Una función pura es aquella que, dados los mismos argumentos de entrada, siempre devuelve el mismo resultado sin producir efectos secundarios, lo que garantiza predictibilidad y facilidad de depuración en la gestión del estado.
Dispatch: Una función que permite enviar acciones al reducer para modificar el estado.
Casos en los que useReducer es preferible a useState
Estados con lógica de actualización compleja: Cuando el estado depende de varias condiciones, useReducer ayuda a estructurar mejor la lógica de actualización.
Estados que dependen del estado anterior: useReducer evita problemas derivados de estados obsoletos al manejar actualizaciones dependientes.
Manejo de acciones múltiples: Cuando un estado responde a distintas acciones (por ejemplo, incrementar, decrementar, resetear), useReducer organiza mejor el código.
Facilidad de testeo: Al utilizar una función pura para actualizar el estado, es más fácil escribir pruebas para la lógica del reducer.
Ejemplo práctico: Manejo de formulario con useReducer
import { useReducer } from 'react';

const initialState = { nombre: '', email: '' };

function formReducer(state, action) {

  return { ...state, [action.field]: action.value };

}

function Formulario() {

  const [state, dispatch] = useReducer(formReducer, initialState);

  return (

    <form>

      <input

        type="text"

        value={state.nombre}

        onChange={(e) => dispatch({ field: 'nombre', value: e.target.value })}

        placeholder="Nombre"

      />

      <input

        type="email"

        value={state.email}

        onChange={(e) => dispatch({ field: 'email', value: e.target.value })}

        placeholder="Email"

      />

      <p>Nombre: {state.nombre}</p>

      <p>Email: {state.email}</p>

    </form>

  );

}
Este ejemplo demuestra cómo useReducer facilita la gestión de formularios sin necesidad de manejar varios estados individuales con useState.

Casos de uso en el mundo real
Manejo de formularios grandes: useReducer permite gestionar múltiples campos de entrada de forma organizada y eficiente.
Autenticación de usuario: Puede usarse para gestionar estados como "cargando", "autenticado" o "error".
Carritos de compra: Ideal para manejar productos en un carrito, con acciones como "agregar", "eliminar" y "vaciar".
Sistemas de navegación: Manejo de estados de pestañas o rutas activas.
Conclusión
El hook useReducer es una herramienta poderosa cuando se trabaja con estados complejos en React. Proporciona una estructura clara y escalable para manejar estados dependientes de múltiples acciones y facilita la reutilización de la lógica de actualización.

Su uso es especialmente recomendable cuando useState se vuelve difícil de manejar o cuando se requiere una lógica más predecible y organizada para modificar el estado.