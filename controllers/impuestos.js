'use strict'
var Impuestos = require('../models/impuestos');
var fs = require('fs');
var path = require('path');

var controller= {
	prueba:function(req,res){
		return res.status(200).send({
			message:'Funciona correctamente'
		});
	},
	generarImpuesto:function(req,res){
		var impuesto= new Impuestos();
		var params=req.body;
		console.log(params);
		impuesto.id_cliente=params.id_cliente;
		impuesto.folio_presentacion=params.folio_presentacion;
		impuesto.fecha_presentacion=params.fecha_presentacion;
		impuesto.fecha_pago=params.fecha_pago;
		impuesto.folio_pago=params.folio_pago;
		impuesto.tipo_impuesto=params.tipo_impuesto;
		impuesto.cantidad=params.cantidad;

		impuesto.save((err,impuestoStored)=>{
			if(err) return res.status(500).send({message:'Error en el servidor '});

			if(!impuestoStored) return res.status(404).send({message: 'No se pudo registrar el impuesto'});

			return res.status(200).send({impuesto: impuestoStored});
		});
	},
	mostrarImpuesto:function(req,res){
		console.log(req.params);
		var impuestoId=req.params.id;
		if (impuestoId==null){
			return res.status(404).send({message: 'El pago no existe'});
		}

		Impuestos.find({id_cliente: impuestoId}).sort({datefield: -1}).exec((err,impuesto)=>{
			if(err) return res.status(500).send({message: 'Error al devolver los impuestos'});

			if(!impuesto) return res.status(404).send({message: 'El Pago no existe'});

			return res.status(200).send({
				impuesto
			});
		});
	},
	mostrarImpuestos:function(req,res){
		Impuestos.find({}).exec((err,impuestos)=>{
			if(err) return res.status.status(500).send({message: 'Error al devolver los impuestos'});

			if(!impuestos) return res.status(404).send({message: 'No hay impuestos para mostrar'});

			return res.status(200).send({impuestos});
		});
	},
	eliminarImpuesto:function(req,res){
		var impuestoId=req.params.id;
		Impuestos.findByIdAndDelete(impuestoId,(err,impuestoRemoved)=>{
			if(err)return res.status(500).send({message: 'No se a podido borrar el usuario'});

			if(!impuestoRemoved) return res.status(404).send({message: 'No se puede eliminar ese usuario'});

			return res.status(200).send({
				impuesto: impuestoRemoved
			});
		});
	},
	actualizarImpuestos:function(req,res){
		var Impuesto_id = req.params.id;
		var update = req.body;
		
		Impuestos.findByIdAndUpdate(Impuesto_id,update,{new:true},(err,impuestoUpdated)=>{
			if(err)return res.status(500).send({message: 'No se ha podido actualizar impuesto'});

			if (!impuestoUpdated) return res.status(404).send({message : 'Impuesto no encontrado '});

			return res.status(200).send({
				impuesto: impuestoUpdated
			});
		});

	},
	mostrarImpuesto_porId:function(req,res){
		console.log(req.params);
		var impuestoId=req.params.id;
		if (impuestoId==null){
			return res.status(404).send({message: 'El pago no existe'});
		}

		Impuestos.find({_id: impuestoId}).exec((err,impuesto)=>{
			if(err) return res.status(500).send({message: 'Error al devolver los impuestos'});

			if(!impuesto) return res.status(404).send({message: 'El Pago no existe'});

			return res.status(200).send({
				impuesto
			});
		});
	}
}
module.exports = controller;