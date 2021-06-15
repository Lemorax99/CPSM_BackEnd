'use strict'

var Estado = require('../models/estado');
var fs = require('fs');
var path = require('path');

var controller= {
    prueba:function(req,res){
        return res.status(202).send({message : 'funciona correctamente'});
    },
    registrar_estado:function(req,res){
        var estado = new Estado();
        var params = req.body;

        estado.id_cliente = params.id_cliente;
        estado.estado = params.estado;

        estado.save ((err,estadoStored)=>{
            if (err) return res.status(500).send({message: 'Error en el servidor'});

            if (!estadoStored) return res.status(404).send({message : 'Nose ha podido registrar el estado'});

            return res.status(200).send({estado : estadoStored});
        });
    },
    getEstado:function(req,res){
        console.log(req.params);
        var Estado_id = req.params.id;

        if (Estado_id==null){
            return res.status(404).send({message: ' El estado no existe '});
        }

        Estado.find({id_cliente: Estado_id}).exec((err,estado)=>{
            console.log(1);
            if(err){
                return res.status(500).send({message:'Ocurrio un error al buscar estado'});
                console.log(1);
            }
            if (!estado){
                return res.status(404).send({message: 'Estado no encontrado'});
                console.log(1);
            }else{
                return res.status(200).send({estado});
                console.log(1);
            }
        });
    }
}

module.exports = controller;
