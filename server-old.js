const express = require('express');
const app = express();




app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/hola_mundo/', (req, res) => {
    res.send('Hola mundo desde su respectiva ruta');
});

app.listen(8080);
