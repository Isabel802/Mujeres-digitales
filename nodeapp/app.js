var express = require('express') //1.Se hace llamado a el paquete de express.
global.app = express()
var path = require('path')
global.appRoot = path.resolve(__dirname) //La raiz del aplicativo.
global.config = require(__dirname + '/config.js').config
//Conectarse a mongodb npm mongoose.
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/datosmujeres',{useNewUrlParser:true,useUnifiedTopology:true},(error,res) => {
    if(error){
        console.log(error)
    }
    else{
        console.log('Conexion a Mongo Correcta')
    }
})
require('./routes/routes.js')
//Crear una ruta especifica.
//Configuración SPA - Angular.
app.use('/',express.static(__dirname + '/Pagina')) //Renderiza el HTML.
// app.get('/*',function(request,response,next){
//     response.sendFile(path.resolve(__dirname + '/Pagina/index.html'))
// })
//Configuración del servidor.
app.listen(config.puerto,function(){ //Se hace un llamado por medio del listen
    console.log('Servidor iniciado por el puertos' + config.puerto)
})