import { Link } from 'react-router-dom';

const citasPaciente = [
    { id: 1, paciente: 'Juan Pérez' },
    { id: 2, paciente: 'María López' },
    { id: 3, paciente: 'Carlos Sánchez' },
];

function Citas() {
    return (
        <div>
            <h1>Lista de Citas Médicas</h1>
            <ul>
                {citasPaciente.map(cita => (
                    <li key={cita.id}>
                        <Link to={`/cita/${cita.id}`}>
                            Cita de {cita.paciente}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Citas;