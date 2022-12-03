const express = require('express');
const helmet = require('helmet');
const routes = require('./routes/routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(helmet());

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});