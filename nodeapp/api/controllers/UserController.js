var ModelUsuarios = require(appRoot + '/api/models/UserModel.js').usuario
var MD5 = require('md5') //Configuración del paquete MD5.
var usercontroller = {}
//Acciones que realiza.
usercontroller.Guardar = function(request,response){
    var post = {
        nombre:request.body.nombre,
        email:request.body.email,
        telefono:request.body.telefono,
        edad:request.body.edad
    }
    //Validaciones de los campos.
    if(post.nombre == '' || post.nombre == undefined || post.nombre == null){
        response.json({state:false,mensaje:'El campo nombre es obligatorio'})
        return false
    }
    if(post.email == '' || post.email == undefined || post.email == null){
        response.json({state:false,mensaje:'El campo email es obligatorio'})
        return false
    }
    if(post.telefono == '' || post.telefono == undefined || post.telefono == null){
        response.json({state:false,mensaje:'El campo teléfono es obligatorio'})
        return false
    }
    if(post.edad == '' || post.edad == undefined || post.edad == null){
        response.json({state:false,mensaje:'El campo edad es obligatorio'})
        return false
    }
    ModelUsuarios.Guardar(post,function(respuesta){
        console.log(respuesta)
        response.json(respuesta)
    })
}
usercontroller.Modificar = function(request,response){ //No se coloca el email ya que no sería correcto que se modifique.
    var post = {
        nombre:request.body.nombre,
        email:request.body.email,
        telefono:request.body.telefono,
        posicion:request.body.posicion
    }  
    //Validaciones de los campos.
    if(post.posicion == '' || post.posicion == undefined || post.posicion == null){
        response.json({state:false,mensaje:'El campo posicion es obligatorio'})
        return false
    }
    if(post.nombre == '' || post.nombre == undefined || post.nombre == null){
        response.json({state:false,mensaje:'El campo nombre es obligatorio'})
        return false
    }
    if(post.email == '' || post.email == undefined || post.email == null){
        response.json({state:false,mensaje:'El campo email es obligatorio'})
        return false
    }
    if(post.telefono == '' || post.telefono == undefined || post.telefono == null){
        response.json({state:false,mensaje:'El campo teléfono es obligatorio'})
        return false
    }
    ModelUsuarios.Modificar(post,function(respuesta){
        response.json(respuesta)
    })
}
usercontroller.Eliminar = function(request,response){
    var post = {
        posicion:request.body.posicion
    }
    if(post.posicion == '' || post.posicion == undefined || post.posicion == null){
        response.json({state:false,mensaje:'El campo posición es obligatorio'})
        return false
    }
    ModelUsuarios.Eliminar(post,function(resultado){
        response.json(resultado)
    })
}
usercontroller.Listar = function(request,response){
ModelUsuarios.Listar(null,function(respuesta){
    response.json(respuesta)
})
}
module.exports.usuario = usercontroller