import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch("https://swapi.info/api/people")
    .then((response) => response.json())
    .then((data) => {
      setCharacters(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
    });
}, [])

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
}

export default App
