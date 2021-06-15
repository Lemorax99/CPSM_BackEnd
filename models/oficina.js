'use strict'
//Crear Modelo

var mongoose = require('mongoose');
//Creacion del esquema
var Schema = mongoose.Schema;
//Modelo de los json de la base de datos creados
var ProjectSchema = Schema({
	name: String,
	rfc: String,
	curp: String,
	domicilio: String,
	telefono: String,
	password: String,
	actividad: String,
	fecha_inicio: String,
	correo: String,
	contra_correo: String,
	regimen: String
});

module.exports = mongoose.model('Clientes',ProjectSchema);