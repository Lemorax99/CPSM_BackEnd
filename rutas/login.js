'use strict'
var express= require('express');

const Usuarios = require('../controllers/login');

var router=express.Router();

router.get('/register',Usuarios.prueba);
router.post('/registrar',Usuarios.crearUsuario);
router.get('/mostrar/:id',Usuarios.mostrarUsuario);
router.get('/todos',Usuarios.mostrarUsuarios);
router.delete('/eliminar/:id',Usuarios.eliminarUsuario);
router.put('/actualizar/:id',Usuarios.actualizarUsuario);
router.post('/logear',Usuarios.logearUsuario);

module.exports = router;