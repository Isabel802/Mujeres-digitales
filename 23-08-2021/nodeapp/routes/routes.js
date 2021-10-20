var bodyParser = require('body-parser') //Configuración de la librería body-parser.
app.use(bodyParser.json()) //Configuración de la librería body-parser.
app.use(bodyParser.urlencoded({extended:true})) //Configuración de la librería body-parser.
var Usuarios = require(appRoot + '/api/controllers/UserController.js').usuario
app.get('/Usuarios/Guardar/:nombre',function(request,response){
    Usuarios.guardar(request,response)
})
app.post('/mipost',function(request,response){
    console.log(request.body)
    response.json({state:true,datos:request.body})
})
