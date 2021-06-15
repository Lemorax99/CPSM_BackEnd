'use strict'

var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var EstadoSchema= Schema({
    id_cliente: String,
    estado:String
});

module.exports = mongoose.model('Estado',EstadoSchema);