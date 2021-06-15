'use strict'
//Crear Modelo

var mongoose = require('mongoose');
//Creacion del esquema
var Schema = mongoose.Schema;
//Modelo de los json de la base de datos creados
var ProjectSchema = Schema({
	name:String,
	email:String,
	password:String,
	tipo:String
});

module.exports = mongoose.model('Usuarios',ProjectSchema);