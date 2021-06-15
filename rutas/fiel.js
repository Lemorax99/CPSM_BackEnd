'use strict'

var express = require('express');

const Fiel = require('../controllers/fiel');

var router = express.Router();

router.get('/prueba',Fiel.prueba);
router.post('/registrar',Fiel.generarFiel);
router.get('/mostrar/:id',Fiel.mostrarFiel);
router.get('/todos',Fiel.mostrarFiels);
router.delete('/eliminar/:id',Fiel.eliminarFiel);
router.put('/actualizar/:id',Fiel.actualizarFiel);

module.exports=router;
