import { useEffect, useState } from "react";

function ListaCompras() {
    // Definir el estado para la lista de compras
    const [productos, setProductos] = useState([]);
    const [nuevoProducto, setNuevoProducto] = useState("");

    const [editandoIndex, setEditandoIndex] = useState(null);
    const [productoEditado, setProductoEditado] = useState("");

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

        if (confirmar) {
            const productosRestantes = productos.filter((_, i) => i !== index);
            setProductos(productosRestantes);
        }
        // const productosRestantes = productos.filter((_, i) => i !== index);
        // setProductos(productosRestantes);


    };

    const guardarEdicion = (index) => {
        const nuevaLista = [...productos];
        nuevaLista[index] = productoEditado;
        setProductos(nuevaLista);
        setEditandoIndex(null);
        setProductoEditado("");
    };

    useEffect(() => {
        const productosGuardados = localStorage.getItem("productos");
        if (productosGuardados) {
            setProductos(JSON.parse(productosGuardados));
        }
    }, [])


    useEffect(() => {
        localStorage.setItem("productos", JSON.stringify(productos));
    }, [productos])

    return (
        <div>
            <h2>Lista de Compras</h2>
            <p>Total de Productos: {productos.length}</p>
            <input
                type="text"
                value={nuevoProducto}
                onChange={(e) => setNuevoProducto(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") agregarProducto();
                }}

            />
            <button onClick={agregarProducto}>Agregar</button>
            <ul>
                {productos.map((producto, index) => (
                    <li key={index}>
                        {editandoIndex === index ? (
                            <>
                                <input
                                    value={productoEditado}
                                    onChange={(e) => setProductoEditado(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") guardarEdicion();
                                    }}
                                />
                                <button onClick={() => guardarEdicion(index)}> Guardar</button>
                            </>
                        ) : (
                            <>
                                {producto}
                                <button onClick={() => eliminarProducto(index)}> Eliminar</button>
                                <button onClick={() => {
                                    setEditandoIndex(index);
                                    setProductoEditado(producto);
                                }}>Editar</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaCompras;