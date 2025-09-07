const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = 3000;

// Middleware

app.use(bodyParser.json());

// Rutas

app.get('/', (req, res) => {

    res.send('Hola, mundo!');

});

app.listen(port, () => {

    console.log(`Servidor corriendo en http://localhost:${port}`);

});

let items = [];

app.post('/items', (req, res) => {

    const item = req.body;

    items.push(item);

    res.status(201).send(item);

});

app.get('/items', (req, res) => {

    res.status(200).json(items);

});

app.put('/items/:id', (req, res) => {

    const { id } = req.params;

    const updatedItem = req.body;

    let item = items.find(i => i.id === parseInt(id));

    if (item) {

        item = { ...item, ...updatedItem };

        items = items.map(i => (i.id === parseInt(id) ? item : i));

        res.status(200).json(item);

    } else {

        res.status(404).send('Item no encontrado');

    }

});

app.delete('/items/:id', (req, res) => {

    const { id } = req.params;

    items = items.filter(i => i.id !== parseInt(id));

    res.status(200).send('Item eliminado');

});