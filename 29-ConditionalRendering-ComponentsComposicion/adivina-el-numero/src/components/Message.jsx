import React from "react";

const Message = ({ numero, objetivo }) => {
    if (numero === "") return <p>Ingresa un número para empezar</p>;

    const num = Number(numero);

    if (isNaN(num)) return <p>Eso no es un número válido</p>;
    if (num < objetivo) return <p>El número es mayor</p>;
    if (num > objetivo) return <p>El número es menor</p>;
    return <p>Correcto</p>;

    
};

export default Message;