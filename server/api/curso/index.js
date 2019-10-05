const Curso = require('./model');

Curso.methods(['get', 'post', 'put', 'delete']);
Curso.updateOptions({ new: true, runValidators: true });
module.exports = Curso;


/*
Para executar nodemon (ou qualquer outro modulo):
- node ./node_modules\NOME_MODULO\bin\NOME_MODULO.JS
*/