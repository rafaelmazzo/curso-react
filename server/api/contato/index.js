const Contato = require('./model');

Contato.methods(['get', 'post', 'delete']);
Contato.updateOptions({ new: true, runValidators: true });
module.exports = Contato;

/*
Para executar nodemon (ou qualquer outro modulo):
- node ./node_modules\NOME_MODULO\bin\NOME_MODULO.JS   
*/