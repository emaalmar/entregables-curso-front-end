import { useState, useEffect, useMemo } from 'react'
import './App.css'
import Planeta from './Planeta';
import FormularioPlaneta from './components/FormularioPlaneta';

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);
  const [planetas, setPlanetas] = useState([])
  const [planetaSeleccionado, setPlanetaSeleccionado] = useState(null)

  useEffect(() => {
    const registroPlanetas = localStorage.getItem("planetas");
    if (registroPlanetas) {
      setPlanetas(JSON.parse(registroPlanetas))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("planetas", JSON.stringify(planetas))
  }, [planetas])


  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  const agregarPlaneta = (planeta) => {
    setPlanetas([...planetas, planeta])
  };

  const eliminarPlaneta = (index) => {
    const planeta = planetas[index];
    const confirmar = window.confirm(`Quieres eliminitar ${planeta.nombre} ?`)

    if (confirmar) {
      const nuevaLista = planetas.filter((_, i) => i !== index);
      setPlanetas(nuevaLista)
    }
  }

  const editarPlaneta = (index) => {
    const planeta = planetas[index];
    const nuevoNombre = prompt("Nuevo nombre del planeta:", planeta.nombre);
    const nuevaDescripcion = prompt("Nueva descripción:", planeta.descripcion);
    const nuevaImagen = prompt('Nueva imagen', planeta.imagen);

    if(nuevoNombre && nuevaDescripcion || nuevaImagen) {
      const nuevaLista = [... planetas];
      nuevaLista[index] = {...nuevaLista[index], nombre: nuevoNombre,
      descripcion:nuevaDescripcion,
      imagen: nuevaImagen
      };
      setPlanetas(nuevaLista);
    }
  };

  // const eliminarPlaneta = (index) => {
  //   const confirmar = window.confirm("¿Estás seguro de que deseas eliminar este planeta?");
  //   if (confirmar) {
  //     const nuevos = [...planetas];
  //     nuevos.splice(index, 1); // Modifica el array nuevo directamente
  //     setPlanetas(nuevos);
  //   }
  // };

  return (
    <>
      <h1>Panel de control</h1>
      <p> distancia: {distancia} km </p>
      <p> combustible: {combustible} %</p>
      <p> {mensajeEstado}</p>

      {/* ... (información del panel) */}
      {planetasVisitados.map((planeta, index) => (
        <Planeta key={index} nombre={planeta} />))}

      <button
        onClick={() => {
          const nombrePlaneta = prompt("¿Donde quieres aterrizar?");
          if (nombrePlaneta) {
            setEstadoNave("Aterrizando");
            setPlanetasVisitados([nombrePlaneta]);
          }
        }}
      > Aterrizar</button>

      <FormularioPlaneta onAgregar={agregarPlaneta} />

      <h2>Planetas Registrados:</h2>

      <ul>
        {planetas.map((planeta, index) => (
          <li key={index} onClick={() => setPlanetaSeleccionado(planeta)} style={{ cursor: 'pointer' }}>
            <h3>{planeta.nombre}</h3>
            <button onClick={() => editarPlaneta(index)}>Editar</button>
            <button onClick={() => eliminarPlaneta(index)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {planetaSeleccionado && (
        <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
          <h2>Detalles del planeta</h2>
          <h3>{planetaSeleccionado.nombre}</h3>
          <p>{planetaSeleccionado.descripcion}</p>
          {planetaSeleccionado.imagen && (
            <img
              src={planetaSeleccionado.imagen}
              alt={planetaSeleccionado.nombre}
              width=" 300"
              style={{ borderRadius: '8px' }}
            />
          )}
          <button onClick={() => setPlanetaSeleccionado(null)}>cerrar</button>
        </div>
      )}
    </>
  );
}

export default App
