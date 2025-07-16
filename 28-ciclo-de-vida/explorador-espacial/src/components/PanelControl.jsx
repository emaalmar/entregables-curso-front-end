function PanelControl({ distancia, combustible, mensajeEstado, onAterrizar }) {
    return (
        <div>
            <p>Distancia: {distancia} km</p>
            <p>Combustible: {combustible} %</p>
            <p>{mensajeEstado}</p>

            <button onClick={onAterrizar}>Aterrizar</button>
        </div>
    );
}

export default PanelControl;