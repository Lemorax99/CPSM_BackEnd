'use strict'

var app = require('./app');
app.set('port',process.env.PORT||3000)

//Conexion a la base de datos
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/oficina')
		.then(()=>{
			console.log('Conexion a la base de datos establecida con exito');
			//Creacion del servidor
			app.listen(app.get('port'),()=>{
				console.log('El servidor corriendo correctamente en la url localhost : 3000')
			})
		})
	.catch(err=> console.log(err));
