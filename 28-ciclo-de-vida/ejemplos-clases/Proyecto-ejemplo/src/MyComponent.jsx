import React, { useState, useEffect } from 'react';

function MyComponent() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log('Componente actualizado');

        // Actualizar el DOM, realizar solicitudes de datos, etc.

    }, [count]);

    useEffect(() => {

        console.log('Componente montado');

        return () => {

            console.log('Componente desmontado');

            // Cancelar suscripciones, limpiar recursos, etc.

        };

    }, []);


    return (

        <div>

            <p>Contador: {count}</p>

            <button onClick={() => setCount(count + 1)}>Incrementar</button>

        </div>

    );

}

export default MyComponent