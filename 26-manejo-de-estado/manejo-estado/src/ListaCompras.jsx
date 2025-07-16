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
            (prod) => prod.nombre.toLowerCase() === nombre);

        if (existe) {
            alert("Este producto ya está en la lista.");
            return;
        }

        setProductos([...productos, { nombre: nuevoProducto, comprado: false }]);
        setNuevoProducto("");

    };

    // Función para eliminar un producto de la lista
    const eliminarProducto = (index) => {

        const producto = productos[index];
        const confirmar = window.confirm(`¿Seguro que quieres eliminar esto ${producto.nombre}?`);

        if (confirmar) {
            const productosRestantes = productos.filter((_, i) => i !== index);
            setProductos(productosRestantes);
        }
        // const productosRestantes = productos.filter((_, i) => i !== index);
        // setProductos(productosRestantes);
    };

    const guardarEdicion = (index) => {
        const nuevaLista = [...productos];
        nuevaLista[index].nombre = productoEditado;
        setProductos(nuevaLista);
        setEditandoIndex(null);
        setProductoEditado("");
    };
    

    const marcarComoComprado = (index) => {
        const nuevaLista = [...productos]
        nuevaLista[index].comprado = !nuevaLista[index].comprado;
        setProductos(nuevaLista);
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
                    <li
                        key={index}
                        style={{ textDecoration: producto.comprado ? 'line-through' : 'none' }}
                    >
                        <input
                            type="checkbox"
                            checked={producto.comprado}
                            onChange={() => marcarComoComprado(index)}
                        />
                        {editandoIndex === index ? (
                            <>
                                <input
                                    value={productoEditado}
                                    onChange={(e) => setProductoEditado(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") guardarEdicion(index);
                                    }}
                                />

                                <button onClick={() => guardarEdicion(index)}> Guardar</button>
                            </>
                        ) : (
                            <>
                                {producto.nombre}
                                <button onClick={() => eliminarProducto(index)}> Eliminar</button>
                                <button onClick={() => {
                                    setEditandoIndex(index);
                                    setProductoEditado(producto.nombre);
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