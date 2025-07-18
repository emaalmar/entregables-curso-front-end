import { useEffect,useReducer,useRef,useCallback } from "react";

const initialState = { count: 0, history: [], numeroEspecifico: 1 };

function reducer(state, action) {

    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + state.numeroEspecifico,
                history: [...state.history, state.count],
            };
        case "decrement":
            return {
                ...state,
                count: state.count - state.numeroEspecifico,
                history: [...state.history, state.count],
            };
        case "undo":
            { if (state.history.length === 0) return state;
            const lastValue = state.history[state.history.length - 1];
            return {
                ...state,
                count: lastValue,
                history: state.history.slice(0, -1),
            }; }
        case "setNumero":
            return {
                ...state,
                numeroEspecifico: Number(action.value),
            };

        case "load_history":
            return {
                ...state,
                history:action.payload
            }

        case "reset":
            return initialState;
        default:
            return state;
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

    useEffect(() => {
        localStorage.setItem("contador", JSON.stringify(state.history))
    }, [state.history])

    useEffect(() => {
        const registroValores = localStorage.getItem("contador");
        if (registroValores) {
            dispatch({
                type: "load_history",
                payload: JSON.parse(registroValores)
            })
        }
    }, [])

    return (
        <>
            <h2> Valor actual del contador: {state.count}</h2>

            <input
                type="number"
                value={state.numeroEspecifico}
                onChange={(e) =>
                    dispatch({ type: "setNumero", value: Number(e.target.value) })
                }
            />
            <button ref={incrementBtnRef} onClick={handleDecrement}> - </button>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleReset}> Reset</button>
            <button onClick={() => dispatch({ type: "undo" })}>Undo</button>
            <h3>Historial de cambios: </h3>
            <ul>
                {state.history.map((entry, index) => (
                    <li key={index}> Cambio # {index + 1}: valor previo {entry}</li>
                )
                )}
            </ul>
        </>
    )
}

export default CounterGame