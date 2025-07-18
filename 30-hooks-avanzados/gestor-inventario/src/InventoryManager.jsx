import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { useReducer } from 'react';

const initialState = { products: [] };

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return {
                products: [
                    ...state.products,
                    {
                        id: Date.now(),
                        name: action.name,
                        quantity: 1
                    }]
            }
        case "increment":
            return {
                products: state.products.map(p =>
                    p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
                )
            };
        case "decrement":
            return {
                products: state.products.map(p =>
                    p.id === action.id && p.quantity > 0
                        ? { ...p, quantity: p.quantity - 1 }
                        : p
                )
            };

        case "initialize":
            return {
                ...state,
                products: action.payload
            };

        case "remove":
            return {
                products: state.products.filter(p => p.id !== action.id)
            };

        case "Vaciar":
            return initialState;
        default:
            return state;
    }
}



const InventoryManager = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const inputRef = useRef(null);
    const [filtroProducto, setFiltroProducto] = useState("")

    const handleAddProduct = () => {
        if (state.products.some(p => p.name.toLowerCase() === inputRef.current.value.toLowerCase().trim())) {
            alert("El producto ya existe.");
            return;
        }
        if (inputRef.current.value.trim() !== "") {
            dispatch({ type: "add", name: inputRef.current.value });
            inputRef.current.value = "";
        }

    };

    const handleIncrement = useCallback((id) => {
        dispatch({ type: "increment", id });
    }, []);

    const handleDecrement = useCallback((id) => {
        dispatch({ type: "decrement", id });
    }, []);

    const productosFiltrados = state.products.filter((p) => p.name.toLowerCase().includes(filtroProducto.toLocaleLowerCase())
    );

    useEffect(() => {
        localStorage.setItem("inventario", JSON.stringify(state.products))
    }, [state.products])


    useEffect(() => {
        const savedInventory = localStorage.getItem('inventario');

        if (savedInventory) {
            dispatch({
                type: 'initialize',
                payload: JSON.parse(savedInventory)
            });
        }
    }, []);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <>
            <h2>Gestor de Inventario</h2>
            <input
                ref={inputRef}
                type='text'
                placeholder='Nombre del producto'
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleAddProduct();
                }}
            />
            <button onClick={handleAddProduct}> Agregar Producto </button>
            <h3>Eliminar</h3>
            <button onClick={() => dispatch({ type: "Vaciar" })}>Eliminar todo el inventario</button>

            <h3> Filtro productos</h3>
            <input
                type="text"
                value={filtroProducto}
                onChange={(e) => setFiltroProducto(e.target.value)}
                placeholder='Filtro'
            />

            <ul>
                {productosFiltrados.map((product) => (
                    <li key={product.id}>
                        {product.name} - Cantidad: {product.quantity}
                        <button onClick={() => handleIncrement(product.id)}>+</button>
                        <button onClick={() => handleDecrement(product.id)}>-</button>
                        <button onClick={() => dispatch({ type: "remove", id: product.id })}> Eliminar </button>
                    </li>
                ))}
            </ul>


        </>
    )
}

export default InventoryManager