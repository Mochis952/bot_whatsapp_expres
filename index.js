const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
