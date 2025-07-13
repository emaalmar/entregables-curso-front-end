import { useRef } from 'react';

function TemporizadorUseRef() {

    const timerRef = useRef(null);

    const iniciarTemporizador = () => {

        timerRef.current = setTimeout(() => {

            alert('Tiempo agotado!');

        }, 3000);

    };

    const cancelarTemporizador = () => {

        clearTimeout(timerRef.current);

    };

    return (

        <div>

            <button onClick={iniciarTemporizador}>Iniciar</button>

            <button onClick={cancelarTemporizador}>Cancelar</button>

        </div>

    );

}

export default TemporizadorUseRef;