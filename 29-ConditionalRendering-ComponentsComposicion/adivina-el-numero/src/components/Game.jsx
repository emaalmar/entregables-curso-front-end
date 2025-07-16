import React, { useEffect, useState } from 'react'
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';


const generarNumero = () => Math.floor(Math.random() * 100) + 1;

const Game = () => {
    const [numero, setNumero] = useState("");
    const [numeroRandom, setNumeroRandom] = useState(generarNumero);

    const reiniciarJuego = () => {
        setNumeroRandom(generarNumero());
        setNumero("");
    };

    return (
        <>
            <InputNumber value={numero} onChange={setNumero} />
            <Message numero={numero} objetivo={numeroRandom} />
            <RestartButton onReiniciar={reiniciarJuego} />
        </>
    );

}

export default Game