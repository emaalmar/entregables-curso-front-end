import { useState, useEffect, useMemo } from 'react'
import './App.css'
import Planeta from './Planeta';
import FormularioPlaneta from './FormularioPlaneta';

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);
  const [planetas, SetPlanetas] = useState([])




  useEffect(() => {
    console.log("¡El panel está listo!"); // Montaje

    const intervalo = setInterval(() => { // Montaje
      setDistancia(prevCount => prevCount + 100);

      setCombustible(prev => {
        if (prev <= 1) {
          clearInterval(intervalo);
          return 0;
        }
        return prev - 1;
      });
    }, 1000)

    // const sinGas = setInterval(() => {
    //   setCombustible(prevCount => prevCount - 1);
    // }, 1000)
    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  useEffect(() => {
    const registroPlanetas = localStorage.getItem("planetas");
    if (registroPlanetas) {
      SetPlanetas(JSON.parse(registroPlanetas))
    }
  }, [])


  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  const agregarPlaneta = (planeta) => {
    SetPlanetas([...planetas, planeta])
  };

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
          <li key={index}>
            <h3>Planeta: {planeta.nombre}</h3>
            <p>Descripcion del planeta: {planeta.descripcion}</p>
            {planeta.imagen && <img src={planeta.imagen} alt={planeta.nombre} width="200" />}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
