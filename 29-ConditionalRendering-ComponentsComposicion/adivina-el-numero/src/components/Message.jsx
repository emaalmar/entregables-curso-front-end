import Typography from '@mui/material/Typography';

const Message = ({ numero, objetivo }) => {
    let mensaje = "";
    const num = Number(numero);

    if (!num) {
        mensaje = "Ingresa un número para comenzar";
    } else if (num < objetivo) {
        mensaje = "El número es mayor";
    } else if (num > objetivo) {
        mensaje = "El número es menor";
    } else {
        mensaje = "¡Correcto! Has adivinado el número 🎉";
    }

    return (
        <Typography variant="h6" color="primary" sx={{ my: 2 }}>
            {mensaje}
        </Typography>
    );
};

export default Message;