'use strict'

var express = require('express');

const Monto_impuestos = require('../controllers/monto_impuestos');
const monto_impuestos = require('../models/monto_impuestos');

var router = express.Router();

router.get('/prueba',Monto_impuestos.prueba);
router.get('/obtener/:id',Monto_impuestos.Mostrar_monto_impuestos);
router.post('/registro',Monto_impuestos.Save_Monto_impuestos);
router.put('/actualizar/:id',Monto_impuestos.Update_monto);
router.delete('/eliminar/:id',Monto_impuestos.Eliminar_monto);

module.exports = router;
