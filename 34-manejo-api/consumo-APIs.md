Consumo de APIs (useEffect)
El consumo de APIs es una parte fundamental en el desarrollo de aplicaciones web modernas. En React, la manera recomendada de hacer llamadas a APIs en componentes funcionales es usando el hook useEffect junto con fetch o bibliotecas como axios. En esta lectura, exploraremos el uso de useEffect para obtener datos de una API pública, en este caso, Star Wars API (SWAPI), y los mostraremos en una aplicación de React creada con Vite.

useEffect: Qué es y cómo funciona
useEffect es un hook de React que nos permite ejecutar efectos secundarios en nuestros componentes. Algunos ejemplos de efectos secundarios son:

Llamadas a APIs externas.
Suscripciones a eventos.
Manipulación directa del DOM.
La sintaxis de useEffect es:

useEffect(() => {
  // Código a ejecutar (efecto secundario)
  return () => {
    // Código opcional para limpiar el efecto
  };

}, [dependencias]);
Si el array de dependencias está vacío ([]), el efecto se ejecuta solo una vez cuando el componente se monta.

Creando un proyecto en React con Vite
Para comenzar, crearemos un proyecto con Vite:

npm create vite@latest mi-proyecto-react --template react

cd mi-proyecto-react

npm install

npm run dev
Esto inicializará un proyecto de React con un entorno de desarrollo rápido y eficiente.

Consumiendo la Star Wars API (SWAPI) con useEffect
Ahora, modificaremos el componente App.jsx para hacer una petición a la Star Wars API y mostrar una lista de personajes.

1. Importar useState y useEffect
Primero, importamos los hooks useState y useEffect en nuestro componente:

2. Crear estados para almacenar datos y manejar la carga
Necesitamos un estado para guardar los personajes y otro para manejar el estado de carga:

const [characters, setCharacters] = useState([]);

const [loading, setLoading] = useState(true);
3. Implementar useEffect para hacer la petición a la API
Usamos useEffect para realizar la petición cuando el componente se monta:

useEffect(() => {
  fetch("https://swapi.dev/api/people/")
    .then((response) => response.json())
    .then((data) => {
      setCharacters(data.results);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
    });
}, []);
4. Renderizar los personajes en la interfaz
Finalmente, mostramos los personajes en el componente:

return (
  <div>
    <h1>Personajes de Star Wars</h1>

    {loading ? (
      <p>Cargando...</p>
    ) : (
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character.name}</li>
        ))}
      </ul>
    )}
  </div>
);
Casos de uso en el mundo real
El patrón de consumo de APIs con useEffect es aplicable a muchos escenarios en aplicaciones web modernas, como:

Aplicaciones de noticias que obtienen artículos de una API.
Aplicaciones de e-commerce que cargan productos desde un backend.
Dashboards que muestran datos en tiempo real desde una API externa.
En proyectos grandes, es recomendable usar bibliotecas como Axios para realizar peticiones HTTP de manera más sencilla.

Conclusión
Hemos visto cómo usar useEffect para consumir una API en un proyecto de React creado con Vite. Aprendimos a manejar la carga de datos y a mostrar la información obtenida. Esta técnica es esencial para construir aplicaciones que dependen de datos externos.