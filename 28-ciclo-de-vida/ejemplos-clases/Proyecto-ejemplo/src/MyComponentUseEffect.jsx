import React, { useState, useEffect } from 'react';

function MyComponentUseEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log('El componente se ha renderizado');

    }, [count]);

    return (

        <div>

            <p>Contador: {count}</p>

            <button onClick={() => setCount(count + 1)}>Incrementar</button>

        </div>

    );

}

export default MyComponentUseEffect