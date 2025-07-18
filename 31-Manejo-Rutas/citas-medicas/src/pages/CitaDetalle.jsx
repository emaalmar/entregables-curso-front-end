import { useParams } from 'react-router-dom';

function CitaDetalle() {
    const { id } = useParams();
    return (
        <div>
            <h2>Cita Detalle</h2>
            <p>ID de la cita: {id}</p>
        </div>
    );
}

export default CitaDetalle;