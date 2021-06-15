'use strict'
var Clientes= require('../models/oficina');
var fs = require('fs');
var path = require('path');

var controller= {
	prueba:function(req,res){
		return res.status(200).send({
			message:'Funciona correctamente'
		});
	},
	//Meter datos
	saveCliente: function(req,res){
		var cliente = new Clientes();

		var params=req.body;

		cliente.name=params.name;
		cliente.rfc=params.rfc;
		cliente.curp=params.curp;
		cliente.domicilio=params.domicilio;
		cliente.telefono=params.telefono;
		cliente.password=params.password;
		cliente.actividad=params.actividad;
		cliente.fecha_inicio=params.fecha_inicio;
		cliente.correo=params.correo;
		cliente.contra_correo=params.contra_correo;
		cliente.regimen=params.regimen;
		
		cliente.save((err,clienteStored)=>{
			if(err) return res.status(500).send({message: 'Error al guardar'});

			if (!clienteStored) return res.status(404).send({message: 'No se encontro cliente'});

			return res.status(200).send({cliente: clienteStored});
		});
	},
	getCliente: function(req,res){
		console.log(req.params);
		var clienteId=req.params.id;
		if (clienteId==null){
			return res.status(404).send({message: 'El Cliente no existe'});
		}

		Clientes.findById(clienteId,(err,cliente)=>{
			if(err) return res.status(500).send({message: 'Error al devolver los clientes'});

			if(!cliente) return res.status(404).send({message: 'El Cliente no existe'});

			return res.status(200).send({
				cliente
			});
		});
	},
	//Listar todos los projectos que tenemos en la base de datos 
	getClientes: function(req,res){
		//Project.find({year:2019});
		Clientes.find({}).exec((err,clientes)=>{
			if(err) return res.status.status(500).send({message: 'Error al devolver los clientes'});

			if(!clientes) return res.status(404).send({message: 'No hay clientes para mostrar'});

			return res.status(200).send({clientes});
		});
	},
	//Actualizar
	updateCliente: function(req,res){
		var clienteId = req.params.id;
		var update =req.body;

		Clientes.findByIdAndUpdate(clienteId,update,{new:true}, (err,projectUpdated)=>{
			if(err)return res.status(500).send({message: 'Error al actualizar'});

			if(!projectUpdated) return res.status(404).send({message: 'No existe el proyecto para actualizar'});

			return res.status(200).send({project: projectUpdated})
		});
	},
	//Eliminar 
	deleteCliente: function(req,res){
		var clienteId=req.params.id;

		Clientes.findByIdAndDelete(clienteId,(err,projectRemoved)=>{
			if(err)return res.status(500).send({message: 'No se a podido borrar el proyecto'});

			if(!projectRemoved) return res.status(404).send({message: 'No se puede eliminar ese proyecto'});

			return res.status(200).send({
				cliente: projectRemoved
			});
		});
	}
}

module.exports = controller;
