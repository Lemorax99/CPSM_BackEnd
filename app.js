'use strict'
//Creacion del servidor con node js y express
var express = require('express');
var BodyParser= require('body-parser');

var app = express();

//Cargar archivo de rutas
var oficina_routes = require('./rutas/oficina');
var pagos_routes = require('./rutas/pagos');
var login_routes= require('./rutas/login');
var impuestos_routes= require('./rutas/impuestos');
var estado_routes = require('./rutas/estado');
var fiel_routes = require('./rutas/fiel');
var monto_routes = require('./rutas/monto_impuestos');
//Configurar midleware
app.use(BodyParser.urlencoded({extended: false}));
app.use(BodyParser.json());

//Cors
const cors = require('cors');
app.use(cors());

//Rutas
//Clientes
app.use('/oficina',oficina_routes);
//Pagos
app.use('/pagos',pagos_routes);
//auth
app.use('/principal',login_routes);
//impuestos
app.use('/impuestos',impuestos_routes);
//estado
app.use('/estado',estado_routes);
//Fiel
app.use('/fiel',fiel_routes);
//Monto de impuestos
app.use('/monto_impuestos',monto_routes);

//Exportar modulo app
module.exports=app;