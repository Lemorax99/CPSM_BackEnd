'use strict'

var mongoose= require('mongoose');

var Schema = mongoose.Schema;

var ImpuestoSchema = Schema({
	id_cliente:String,
	folio_presentacion:String,
	fecha_presentacion:String,
	fecha_pago:String,
	folio_pago:String,
	tipo_impuesto:String,
	cantidad:Number
});

module.exports = mongoose.model('Impuestos',ImpuestoSchema);