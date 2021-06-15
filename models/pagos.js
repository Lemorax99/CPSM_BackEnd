'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
//Modelo de los json de la base de datos creados
var ProjectSchema = Schema({
	id_cliente: String,
	folio: String,
	fecha_pago: String,
	mes: String,
	year: Number,
	cantidad: Number,
	pago_mes: Number
});

module.exports = mongoose.model('Pagos',ProjectSchema);