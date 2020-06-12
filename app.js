const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const ESTUDIANTES = [
    {
        nombre: "Erick Agrazal",
        edad: 29,
    },
    {
        nombre: "Luis García",
        edad: 22,
    }
];

// Intermediario
app.use(bodyParser.json());


// Controladores
app.get('/api/estudiantes/', (req, res) => {
    res.json({
        cantidad: ESTUDIANTES.length,
        estudiantes: ESTUDIANTES
    });
});
app.get('/api/estudiantes/:indice', (req, res) => {
    res.json(ESTUDIANTES[req.params.indice]);
});
app.post('/api/estudiantes/', (req, res) => {
    ESTUDIANTES.push(req.body);
    res.json(req.body);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));