// Implementa las Solicitudes con Fetch
const fetchBtn = document.getElementById('fetch-btn');
const dataContainer = document.getElementById('data-container');

fetchBtn.addEventListener('click', () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            renderCharacters(data.results)

        })
        .catch(error => {
            console.error('Error:', error);
            dataContainer.textContent = 'Hubo un error al obtener los datos.';
        });
});

// Implementa las Solicitudes con Axios

// 1. Instala Axios o inclúyelo mediante una CDN:
//   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// 2. Escribe una función que utilice Axios para obtener los datos y manejarlos de manera similar a `fetch`.

const axiosBtn = document.getElementById('axios-btn');

axiosBtn.addEventListener('click', () => {
    axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
            const data = response.data;
            renderCharacters(data.results)
        })
        .catch(error => {
            console.error('Error:', error);
            dataContainer.textContent = 'Hubo un error al obtener los datos.';
        });
});

// Ejemplo de función de renderizado:
// Puedes adecuar este código
function renderCharacters(characters) {
    dataContainer.innerHTML = '';
    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.innerHTML = `
        <h3>${character.name}</h3>
        <p> ${character.origin.name}</>
        <p>
            URL del origen:
            <a href="${character.origin.url}" target="_blank">
                ${character.origin.url}
            </a>
        </p>
        <img src="${character.image}" alt="${character.name}">`;
        dataContainer.appendChild(characterElement);
    });
}