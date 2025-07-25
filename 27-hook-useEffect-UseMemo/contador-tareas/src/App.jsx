import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');
  const [duracionFiltro, setDuracionFiltro] = useState('');
  const [tareasOriginales, setTareasOriginales] = useState([]);
  const [nombreFiltro, setNombreFiltro] = useState('');
  // Efecto secundario: Actualizar el título del documento cada vez que cambia el total
  useEffect(() => {
    document.title = `Total: ${calcularTiempoTotal} minutos`;
  }, [tareas]); // Se ejecuta cada vez que las tareas cambian

  useEffect(() => {
    let lista = [...tareasOriginales];
    if (duracionFiltro !== '') {
      lista = lista.filter(t => t.duracion >= parseInt(duracionFiltro));
    }
    if (nombreFiltro !== '') {
      lista = lista.filter(e => e.nombre.toLowerCase().includes(nombreFiltro.toLowerCase()));
    }
    setTareas(lista);

  }, [duracionFiltro,nombreFiltro, tareasOriginales]);

  useEffect(() =>{
    const tareasGuardadas = localStorage.getItem("misTareas");
    if(tareasGuardadas){
      const lista = JSON.parse(tareasGuardadas);
      setTareasOriginales(lista);
      setTareas(lista);
    }
  },[]);

  useEffect (()=>{
    localStorage.setItem("misTareas", JSON.stringify(tareasOriginales))
  },[tareasOriginales])

  // Cálculo de tiempo total optimizado con useMemo
  const calcularTiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]); // Solo se recalcula cuando cambian las tareas

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion)
      };
      const nuevas = [...tareasOriginales, nuevaTareaObj];
      setTareasOriginales(nuevas)
      setTareas(nuevas);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  const eliminarTareas = () => {
    setTareas([]);
    setTareasOriginales([]);
    localStorage.removeItem("misTareas");
  }

  // const filtrarPorDuracion = (filtro) => {
  //   const listaFiltrada = tareas.filter(tarea => tarea.duracion >= filtro);
  //   setTareas(listaFiltrada);
  // }


  return (
    <div>
      <h1>Contador de Tareas</h1>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nombre de la tarea"
          onKeyDown={(e) => {
            if (e.key === "Enter") agregarTarea();
          }}
        />
        <input
          type="number"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          placeholder="Duración en minutos"
          onKeyDown={(e) => {
            if (e.key === "Enter") agregarTarea();
          }}
        />
        <input
          type='number'
          placeholder=' Filtrar por duración'
          onChange={(e) => setDuracionFiltro(e.target.value)}
        />
        <input
          type='text'
          placeholder='Filtrar por nombre'
          onChange={(e) => setNombreFiltro(e.target.value)}
        />
        <button onClick={agregarTarea}>Agregar tarea</button>
        <button onClick={eliminarTareas}>Eliminar todas las tareas</button>
        {/* <button onClick={() => filtrarPorDuracion(parseInt(duracionFiltro))}>
          Filtrar por duración
        </button> */}

      </div>

      <h2>Tareas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea.nombre}: {tarea.duracion} minutos
          </li>
        ))}
      </ul>

      <h3>Total de tiempo: {calcularTiempoTotal} minutos</h3>
    </div>
  );
}

export default App;