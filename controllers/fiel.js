'use strict'
var Fiel = require('../models/fiel');
var fs = require('fs');
var path = require('path');

var controller= {
	prueba:function(req,res){
		return res.status(200).send({
			message:'Funciona correctamente'
		});
	},
	generarFiel:function(req,res){
		var fiel= new Fiel();
		var params=req.body;
		console.log(params);
		fiel.id_cliente=params.id_cliente;
		fiel.fiel_contra=params.fiel_contra;
		fiel.fiel_vencimiento=params.fiel_vencimiento;
		fiel.csd_contra=params.csd_contra;
		fiel.csd_vencimiento=params.csd_vencimiento;
        fiel.buzon_folio=params.buzon_folio;
        fiel.buzun_comunicacion=params.buzun_comunicacion;
        fiel.pendientes=params.pendientes;

		fiel.save((err,fielStored)=>{
			if(err) return res.status(500).send({message:'Error en el servidor '});

			if(!fielStored) return res.status(404).send({message: 'No se pudo registrar'});

			return res.status(200).send({fiel: fielStored});
		});
	},
	mostrarFiel:function(req,res){
		console.log(req.params);
		var fielId=req.params.id;
		if (fielId==null){
			return res.status(404).send({message: 'La fiel no existe'});
		}

		Fiel.find({_id: fielId}).sort({datefield: -1}).exec((err,fiel)=>{
			if(err) return res.status(500).send({message: 'Error al devolver los impuestos'});

			if(!fiel) return res.status(404).send({message: 'La fiel no existe'});

			return res.status(200).send({
				fiel
			});
		});
	},
	mostrarFiels:function(req,res){
		Fiel.find({}).exec((err,fiel)=>{
			if(err) return res.status.status(500).send({message: 'Error al devolver las fiels'});

			if(!fiel) return res.status(404).send({message: 'No hay fiels para mostrar'});

			return res.status(200).send({fiel});
		});
	},
	eliminarFiel:function(req,res){
		var fielId=req.params.id;
		Fiel.findByIdAndDelete(fielId,(err,fielRemoved)=>{
			if(err)return res.status(500).send({message: 'No se a podido borrar el usuario'});

			if(!fielRemoved) return res.status(404).send({message: 'No se puede eliminar ese usuario'});

			return res.status(200).send({
				fiel: fielRemoved
			});
		});
	},
	actualizarFiel:function(req,res){
		var Fiel_id = req.params.id;
		var update = req.body;
		
		Fiel.findByIdAndUpdate(Fiel_id,update,{new:true},(err,fielUpdated)=>{
			if(err)return res.status(500).send({message: 'No se ha podido actualizar impuesto'});

			if (!fielUpdated) return res.status(404).send({message : 'Impuesto no encontrado '});

			return res.status(200).send({
				fiel: fielUpdated
			});
		});

	}
}
module.exports = controller;