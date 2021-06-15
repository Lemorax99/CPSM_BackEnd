'use strict'
var Monto_impuestos = require('../models/monto_impuestos');
var fs = require('fs');
var path = require('path');

var controller = {
    prueba:function(req,res){
        return res.status(200).send({
            message:'Api funcionando con exito'
        });
    },
    Save_Monto_impuestos:function(req,res){
        var monto_impuestos = new Monto_impuestos();

        var params = req.body;

        monto_impuestos.iva = params.iva;
        monto_impuestos.isr = params.isr;
        monto_impuestos.ieps = params.ieps;
        monto_impuestos.ispt = params.ispt;
        monto_impuestos.ish = params.ish;
        monto_impuestos.isn = params.isn;
        monto_impuestos.rtp = params.rtp;
        monto_impuestos.imss = params.imss;
        monto_impuestos.sar = params.sar;
        monto_impuestos.infonavit = params.infonavit;

        monto_impuestos.save((err,monto_impuestoStored)=>{
            if(err) return res.status(500).send({message:'Error al guardar'});

            if(!monto_impuestoStored) return res.status(404).send({message:'Monto de impuesto no encontrado'});

            return res.status(200).send({monto_impuesto: monto_impuestoStored});
        });    
    },
    Mostrar_monto_impuestos:function(req,res){
        console.log(req.params);
        var monto_id = req.params.id;

        if (monto_id==null){
            return res.status(404).send({message:'Id no fue entregado'});
        }
        Monto_impuestos.find({_id: monto_id}).exec((err,monto_impuestoStored)=>{
            if(err) return res.status(500).send({message: ' No se ha encontrado el monto requerido'});

            if(!monto_impuestoStored) return res.status(404).send({message: 'Monto de impuestos  no existe'});

            return res.status(200).send({monto_impuestos: monto_impuestoStored});
        });
    },
    Eliminar_monto:function(req,res){
        console.log(req.params);
        var monto_id = req.params.id;

        if(monto_id==null){
            return res.status(404).send({message: 'No se envio el id del monto'});
        }

        Monto_impuestos.findByIdAndDelete(monto_id,(err,monto_impuestoRemoved)=>{
            if(err) return res.status(500).send({message: 'Ocurrio un eeror al solicitar los montos'});

            if(!monto_impuestoRemoved) return res.status(404).send({message: 'Montos de impuestos no encontrados'});

            return res.status(200).send({monto_impuestos: monto_impuestoRemoved});
        });
    },
    Update_monto:function(req,res){
        var monto_id=req.params.id;
        var update=req.body;

        Monto_impuestos.findByIdAndUpdate(monto_id,update,{new:true},(err,monto_impuestoUpdate)=>{
            if(err) return res.status(500).send({message: 'Error al obtener el monto'});

            if(!monto_impuestoUpdate) return res.status(404).send({message : 'El monto que requiere no existe'});

            return res.status(200).send({monto_impuestos:monto_impuestoUpdate});
        });
    }
}
module.exports  =  controller;
