
import { useRef, useState } from 'react';

function ContadorUseRef() {

    const renderCount = useRef(0);

    const [count, setCount] = useState(0);

    renderCount.current += 1;

    return (

        <div>
           <h2>Uso en almacenamiento de valores sin re-render:</h2>
            <p>Contador: {count}</p>

            <p>Renderizado: {renderCount.current} veces</p>

            <button onClick={() => setCount(count + 1)}>Incrementar</button>

        </div>

    );

}

export default ContadorUseRef;