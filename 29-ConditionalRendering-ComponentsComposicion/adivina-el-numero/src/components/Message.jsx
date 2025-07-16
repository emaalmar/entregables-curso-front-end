import React, { useEffect, useState } from 'react'

const Message = (numero, numeroRandom) => {

    const [mensaje, setMensaje] = useState("");

            useEffect(() => {
            if (!numero) return;

            if (numero > numeroRandom) {
                setMensaje("El numero es menor");
            } else if (numero < numeroRandom) {
                setMensaje("El numero es mayor");
            } else {
                setMensaje("Ganaste")
            }
        }, [numero])

    return (
        <>
        <p>{mensaje}</p>
        </>

    )
}

export default Message