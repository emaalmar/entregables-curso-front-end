import { useRef, useEffect } from 'react';

function InputFocus() {

    const inputRef = useRef(null);

    useEffect(() => {

        inputRef.current.focus(); // Enfoca el input al montar el componente

    }, []);

    return (
        <>
            <h1>Sintaxis básica:</h1>
            <input ref={inputRef} placeholder="Escribe aquí..." />
        </>
    )

}

export default InputFocus;