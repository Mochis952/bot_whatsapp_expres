const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:`);
});
