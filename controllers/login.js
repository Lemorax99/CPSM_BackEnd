'use strict'
var Usuarios = require('../models/login');
var fs = require('fs');
var path = require('path');

var controller= {
	prueba:function(req,res){
		return res.status(200).send({
			message:'Funciona correctamente'
		});
	},
	crearUsuario:function(req,res){
		var usuario= new Usuarios();
		var params=req.body;
		
		usuario.name=params.name;
		usuario.email=params.email;
		usuario.password=params.password;
		usuario.tipo=params.tipo;

		usuario.save((err,clienteStored)=>{
			if(err) return res.status(500).send({message:'Error en el servidor '});

			if(!clienteStored) return res.status(404).send({message: 'No se pudo registrar el usuario'});

			return res.status(200).send({cliente: clienteStored});
		});
	},
	mostrarUsuario:function(req,res){
		console.log(req.params);
		var usuarioId=req.params.id;
		if (usuarioId==null){
			return res.status(404).send({message: 'El usuario no existe'});
		}

		Usuarios.find({_id: usuarioId}).sort({datefield: -1}).exec((err,usuario)=>{
			if(err) return res.status(500).send({message: 'Error al devolver los usuarios'});

			if(!usuario) return res.status(404).send({message: 'El Usuario no existe'});

			return res.status(200).send({
				usuario
			});
		});
	},
	mostrarUsuarios:function(req,res){
		Usuarios.find({}).exec((err,usuarios)=>{
			if(err) return res.status.status(500).send({message: 'Error al devolver los usuarios'});

			if(!usuarios) return res.status(404).send({message: 'No hay usuarios para mostrar'});

			return res.status(200).send({usuarios});
		});
	},
	eliminarUsuario:function(req,res){
		var usuarioId=req.params.id;

		Usuarios.findByIdAndDelete(usuarioId,(err,usuarioRemoved)=>{
			if(err)return res.status(500).send({message: 'No se a podido borrar el usuario'});

			if(!usuarioRemoved) return res.status(404).send({message: 'No se puede eliminar ese usuario'});

			return res.status(200).send({
				usuario: usuarioRemoved
			});
		});
	},
	actualizarUsuario:function(req,res){
		var usuarioId = req.params.id;
		var update =req.body;

		Usuarios.findByIdAndUpdate(usuarioId,update,{new:true}, (err,usuarioUpdated)=>{
			if(err)return res.status(500).send({message: 'Error al actualizar'});

			if(!usuarioUpdated) return res.status(404).send({message: 'No existe el usuario para actualizar'});

			return res.status(200).send({usuario: usuarioUpdated});
		});
	},
	logearUsuario:function(req,res){
		var prueba = req.body;
		console.log(req.body);
		Usuarios.findOne({email: prueba.email}).exec((err,usuario)=>{
			if(err) return res.status(500).send({message: 'Error en el servidor'});

			if(!usuario) return res.status(404).send({message: 'Usuario no existe'});

			if(usuario){
				if(usuario.password==prueba.password){
					return res.status(200).send({usuario: usuario});
				}else{
					return res.status(200).send({usuario: false});
				}
			}
		});
	}
}
module.exports = controller;