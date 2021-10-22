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
        edad:request.body.edad,
        Id:request.body.Id
    }  
    //Validaciones de los campos.
    if(post.Id == '' || post.Id == undefined || post.Id == null){
        response.json({state:false,mensaje:'El campo Id es obligatorio'})
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
    if(post.edad == '' || post.edad == undefined || post.edad == null){
        response.json({state:false,mensaje:'El campo edad es obligatorio'})
        return false
    }
    ModelUsuarios.Modificar(post,function(respuesta){
        response.json(respuesta)
    })
}
usercontroller.Eliminar = function(request,response){
    var post = {
        Id:request.body.Id
    }
    if(post.Id == '' || post.Id == undefined || post.Id == null){
        response.json({state:false,mensaje:'El campo Id es obligatorio'})
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
usercontroller.ListarXLS = function(request,response){
    ModelUsuarios.Listar(null,function(respuesta){
        console.log(respuesta)
       //Ejemplo de uso del json2xls.
        var fs = require("fs");
        var json2xls = require('json2xls');
        var json = []
        for (let a = 0; a < respuesta.length; a++) {
            json.push(respuesta[a]._doc)
        }
        //Asignar json.
        var xls = json2xls(json);
        //Convertir.
        fs.writeFileSync('usuarios.xlsx', xls, 'binary'); //Crea el archivo.
        //Descarga del archivo.
        response.download('usuarios.xlsx',function(err){
            if(err){
                console.log(err)
            }else{
                console.log('Descarga completa')
                fs.unlinkSync('usuarios.xlsx') //Para evitar que se use tanto espacio.
            }
        })
    })
}
module.exports.usuario = usercontroller