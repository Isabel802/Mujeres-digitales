var express = require('express') //1.Se hace llamado a el paquete de express.
global.app = express()
var path = require('path')
global.appRoot = path.resolve(__dirname) //La raiz del aplicativo.
var port = 3001; //Se coloca el número de preferencia,lo importante es saber cuál es.
require('./routes/routes.js')
//Crear una ruta especifica.
//Configuración SPA - Angular.
app.use('/',express.static(__dirname + '/Pagina')) //Mostrar la página Web
// app.get('/*',function(request,response,next){
//     response.sendFile(path.resolve(__dirname + '/Pagina/index.html'))
// })
//Configuración del servidor.
app.listen(port,function(){ //Se hace un llamado por medio del listen
    console.log('Servidor iniciado por el puertos' + port)
})