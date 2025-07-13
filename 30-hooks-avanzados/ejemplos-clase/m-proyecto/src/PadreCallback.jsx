import { useState, useCallback } from 'react';

import HijoCallback from './HijoCallback';

function PadreCallback() {

    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {

        console.log('Click en el botón');

    }, []);

    return (

        <div>

            <p>Contador: {count}</p>

            <button onClick={() => setCount(count + 1)}>Incrementar</button>

            <HijoCallback onClick={handleClick} />

        </div>

    );

}

export default PadreCallback