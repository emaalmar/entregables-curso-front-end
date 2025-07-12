import React, { useContext } from 'react';
import { MyContext } from './App'; // Importar el contexto

function MyComponentUseContext() {
    const value = useContext(MyContext);

    return (
        <div>
            <p>Valor del contexto: {value}</p>
        </div>
    );
}

export default MyComponentUseContext;