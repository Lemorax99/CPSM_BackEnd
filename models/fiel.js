'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FielSchema= Schema({
    id_cliente:String,
    fiel_contra:String,
    fiel_vencimiento:String,
    csd_contra:String,
    csd_vencimiento:String,
    buzon_folio:String,
    buzon_comunicacion:String,
    pendientes:String
});

module.exports = mongoose.model('Fiel',FielSchema);