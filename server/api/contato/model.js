//criando o schema
const restful = require('node-restful');

const mongoose = restful.mongoose; //referência ao mongoose do restful

//definindo o schema curso
const contatoSchema = new mongoose.Schema({
    codigo: {
        type: Number,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true,
        min: 4
    }
});
module.exports = restful.model('contato', contatoSchema);