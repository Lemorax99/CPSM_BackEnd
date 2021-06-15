'use strict'

var express = require('express');
var ProjectController = require('../controllers/pagos');

var router = express.Router();

router.get('/prueba',ProjectController.prueba);
router.post('/guardar',ProjectController.saveUsuario);
router.get('/mostrar/:id?',ProjectController.getUsuario);
router.get('/pagos',ProjectController.getUsuarios);
router.put('/actualizar/:id',ProjectController.updateUsuario);
router.delete('/eliminar/:id',ProjectController.deleteUsuario);

module.exports=router;