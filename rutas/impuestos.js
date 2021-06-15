'use strict'
var express= require('express');

const Impuestos = require('../controllers/impuestos');

var router=express.Router();

router.get('/register',Impuestos.prueba);
router.post('/registrar',Impuestos.generarImpuesto);
router.get('/mostrar/:id',Impuestos.mostrarImpuesto);
router.get('/mostrar_por_id/:id',Impuestos.mostrarImpuesto_porId);
router.get('/todos',Impuestos.mostrarImpuestos);
router.delete('/eliminar/:id',Impuestos.eliminarImpuesto);
router.put('/actualizar/:id',Impuestos.actualizarImpuestos);

module.exports = router;