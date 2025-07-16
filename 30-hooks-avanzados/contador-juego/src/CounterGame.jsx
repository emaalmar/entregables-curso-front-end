import { useEffect } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { useReducer } from "react";

const initialState = { count: 0, history: [] };

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return {
                count: state.count + 1,
                history: [...state.history, `+1 (Nuevo valor: ${state.count + 1}) `]
            };
        case "decrement":
            return {
                count: state.count - 1,
                history: [...state.history, `-1 (Nuevo valor: ${state.count - 1}) `]
            };
        case "reset":
            return initialState;
        default:
            return state
    }

}

const CounterGame = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const incrementBtnRef = useRef(null)

    const handleIncrement = useCallback(() => {
        dispatch({ type: "increment" })
    }, [])
    const handleDecrement = useCallback(() => {
        dispatch({ type: "decrement" });
    }, [])

    const handleReset = useCallback(() => {
        dispatch({ type: "reset" });
    })

    useEffect(() => {
        incrementBtnRef.current.focus();
    }, [])

    return (
        <>
            <h2> Contador: {state.count}</h2>
            <button ref={incrementBtnRef} onClick={handleDecrement}> - </button>
            <button onClick={handleIncrement}>+</button>
            <button onClick={() => dispatch({ type: "reset" })}> Reset</button>

            <h3>Historial de cambios: </h3>
            <ul>
                {state.history.map((entry, index) => (
                    <li key={index}>{entry}</li>
                )
                )}
            </ul>
        </>
    )
}

export default CounterGame