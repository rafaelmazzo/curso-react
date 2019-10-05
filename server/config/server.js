//middlewares - singletons: commons js
//Boa prática: requires no topo (like imports)
const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');

const port = 3200;
const callback = () => { console.log(`servidor no ar, na porta ${port}`); }
const server = express(); //novo servidor

//para toda requisição que chegar, use o bodyparser para
//interpretar chegadas no formato urlencoded
server.use(bodyParser.urlencoded(
    { extended: true }
));
server.use(bodyParser.json());
server.use(allowCors);
server.use(bodyParser.json()); //considera o formato json no corpo da requisição
server.listen(port, callback);

module.exports = server;