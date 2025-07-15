import { useState, useEffect, useMemo } from 'react'
import './App.css'
import Planeta from './Planeta';

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

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

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  return (
    <>
      <h1>Panel de control</h1>
      <p> distancia: {distancia} km </p>
      <p> combustible: {combustible} %</p>
      <p> {mensajeEstado}</p>

      <button onClick={() => {
        const confirmar = window.confirm("Deseas aterrizar");
        if (confirmar) {
          const nombrePlaneta = prompt("En que planeta?");
          if (confirmar && nombrePlaneta.trim() !== "") {
            setEstadoNave("Aterrizando");
            setPlanetasVisitados([...planetasVisitados, nombrePlaneta.trim()]);
          }
        }
      }}> Aterrizar </button>

      {/* ... (información del panel) */}
      <ul>
        {planetasVisitados.map((planeta, index) => (
          // <Planeta key={index} nombre={planeta} />
          <li key={index}>
            planeta
          </li>
        ))}
      </ul>


    </>
  )
}

export default App
