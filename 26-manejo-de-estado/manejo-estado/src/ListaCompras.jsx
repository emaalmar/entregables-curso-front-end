import { useState } from "react";

function ListaCompras() {
    // Definir el estado para la lista de compras
    const [productos, setProductos] = useState([]);
    const [nuevoProducto, setNuevoProducto] = useState("");

    // Función para agregar un nuevo producto a la lista
    const agregarProducto = () => {
        const nombre = nuevoProducto.trim().toLowerCase();

        if (nombre === "") return

        const existe = productos.some(
            (prod) => prod.toLowerCase() === nombre);

        if (existe) {
            alert("Este producto ya está en la lista.");
            return;
        }

        setProductos([...productos, nuevoProducto]);
        setNuevoProducto("");

    };

    // Función para eliminar un producto de la lista
    const eliminarProducto = (index) => {

        const producto = productos[index];
        const confirmar = window.confirm(`¿Seguro que quieres eliminar esto ${producto}?`)

        if(confirmar){
            const productosRestantes = productos.filter((_, i) => i !== index);
            setProductos(productosRestantes);
        }
        // const productosRestantes = productos.filter((_, i) => i !== index);
        // setProductos(productosRestantes);


    };

    return (
        <div>
            <h2>Lista de Compras</h2>
            <input
                type="text"
                value={nuevoProducto}
                onChange={(e) => setNuevoProducto(e.target.value)}
            />
            <button onClick={agregarProducto}>Agregar</button>
            <ul>
                {productos.map((producto, index) => (
                    <li key={index}>
                        {producto}
                        <button onClick={() => eliminarProducto(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaCompras;