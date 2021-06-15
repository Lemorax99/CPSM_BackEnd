'use strict'

var Pagos= require('../models/pagos');
var fs = require('fs');
var path = require('path');

var controller= {
	prueba:function(req,res){
		return res.status(200).send({
			message:'Funciona correctamente'
		});
	},
	//Meter datos
	saveUsuario: function(req,res){
		var pago = new Pagos();

		var params=req.body;

		pago.id_cliente = params.id_cliente;
		pago.folio = params.folio;
		pago.fecha_pago = params.fecha_pago;
		pago.mes = params.mes;
		pago.year = params.year;
		pago.cantidad=params.cantidad;
		pago.pago_mes=params.pago_mes;

		pago.save((err,pagoStored)=>{
			if(err) return res.status(500).send({message: 'Error al guardar'});

			if (!pagoStored) return res.status(404).send({message: 'No se encontro usuario'});

			return res.status(200).send({pago: pagoStored});
		});
	},
	getUsuario: function(req,res){
		console.log(req.params);
		var pagoId=req.params.id;
		if (pagoId==null){
			return res.status(404).send({message: 'El usuario no existe'});
		}

		Pagos.find({id_cliente: pagoId}).sort({datefield: -1}).exec((err,pago)=>{
			if(err) return res.status(500).send({message: 'Error al devolver los usuarios'});

			if(!pago) return res.status(404).send({message: 'El Usuario no existe'});

			return res.status(200).send({
				pago
			});
		});
	},
	//Listar todos los projectos que tenemos en la base de datos 
	getUsuarios: function(req,res){
		//Project.find({year:2019});
		Pagos.find({}).exec((err,pagos)=>{
			if(err) return res.status.status(500).send({message: 'Error al devolver los usuarios'});

			if(!pagos) return res.status(404).send({message: 'No hay usuarios para mostrar'});

			return res.status(200).send({pagos});
		});
	},
	//Actualizar
	updateUsuario: function(req,res){
		var pagoId = req.params.id;
		var update =req.body;

		Pagos.findByIdAndUpdate(pagoId,update,{new:true}, (err,clienteUpdated)=>{
			if(err)return res.status(500).send({message: 'Error al actualizar'});

			if(!clienteUpdated) return res.status(404).send({message: 'No existe el usuario para actualizar'});

			return res.status(200).send({pago: clienteUpdated})
		});
	},
	//Eliminar 
	deleteUsuario: function(req,res){
		var pagoId=req.params.id;

		Pagos.deleteMany({id_cliente: pagoId}).exec((err,pagoRemoved)=>{
			if(err)return res.status(500).send({message: 'No se a podido borrar el usuario'});

			if(!pagoRemoved) return res.status(404).send({message: 'No se puede eliminar ese usuario'});

			return res.status(200).send({
				project: pagoRemoved
			});
		});
	}
}

module.exports = controller;