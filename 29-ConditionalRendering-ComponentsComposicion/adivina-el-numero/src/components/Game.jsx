import React, { useEffect, useState } from 'react'
import InputNumber from './InputNumber';

const Game = () => {
    const [numero, setNumero] = useState(0);
    const [numeroRandom, setNumeroRandom] = useState(null);
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        setNumeroRandom(Math.floor(Math.random() * 100 + 1));
    }, [])

    useEffect(() => {
        if (!numero) return;

        if (numero > numeroRandom) {
            setMensaje("El numero es menor");
        }else if (numero < numeroRandom){
            setMensaje("El numero es mayor");
        }else{
            setMensaje("Ganaste")
        }
    }, [numero])

    return (
        <>
        <InputNumber value={numero} onChange={setNumero} />
        <p>{mensaje}</p>
        </>
    );

}

export default Game