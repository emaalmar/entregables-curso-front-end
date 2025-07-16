import React, { useState } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const generarNumero = () => Math.floor(Math.random() * 100) + 1;

const Game = () => {
    const [numero, setNumero] = useState("");
    const [numeroRandom, setNumeroRandom] = useState(generarNumero);

    const reiniciarJuego = () => {
        setNumeroRandom(generarNumero());
        setNumero("");
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={4} sx={{ p: 4, mt: 5, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Adivina el número
                </Typography>

                <InputNumber value={numero} onChange={setNumero} />
                <Message numero={numero} objetivo={numeroRandom} />
                <RestartButton onReiniciar={reiniciarJuego} />
            </Paper>
        </Container>
    );
};

export default Game;