'use strict'

var express = require('express');

const EstadoController = require('../controllers/estado');

var router = express.Router();

router.get('/prueba',EstadoController.prueba);
router.post('/registrar',EstadoController.registrar_estado);
router.get('/mostrar/:id',EstadoController.getEstado);

module.exports = router;