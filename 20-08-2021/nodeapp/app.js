var express = require('express') //1.Se hace llamado a el paquete de express.
var app = express()//Se crea la app,tiene el dominio de todo.
var port = 3000; //Se coloca el número de preferencia,lo importante es saber cuál es.
//Crear una ruta especifica.
app.use('/',express.static(__dirname + '/Pagina')) //Mostrar la página Web
//Configuración del servidor.
app.listen(port,function(){ //Se hace un llamado por medio del listen
    console.log('Servidor iniciado por el puerto' + port)
})