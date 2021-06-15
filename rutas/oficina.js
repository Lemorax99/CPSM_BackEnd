'use strict'
//Crear archivo de rutas por controlador

var express = require('express');
var ProjectController = require('../controllers/oficina');

var router = express.Router();

router.get('/prueba',ProjectController.prueba);
router.post('/registro',ProjectController.saveCliente);
router.get('/mostrar/:id',ProjectController.getCliente);
router.get('/clientes',ProjectController.getClientes);
router.put('/actualizar/:id',ProjectController.updateCliente);
router.delete('/eliminar/:id',ProjectController.deleteCliente);

module.exports=router;
