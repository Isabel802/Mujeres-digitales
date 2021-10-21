var ModelUser = {}
var misusuarios = [];
//1.Se importa la libreria.
const mongoose = require('mongoose');
//2.Se define el tipo de esquema.
const Schema = mongoose.Schema;
//Configuración del esquema,estructura de datos que se reciben.
var UserSchema = new Schema({
    firstname:String,
    email:String,
    age:Number
})
const Mymodel = mongoose.model('usuarios',UserSchema)
//Acción de guardar.
ModelUser.Guardar = function(post,callback){
    //Instanciar el modelo.
    const instace = new Mymodel
    //Configuración de la instancia.
    instace.firstname = post.nombre;
    instace.email = post.email;
    instace.age = post.edad;
    //Guarda la información correspondiente.
    instace.save((error,userCreate) => {
        if(error){
            console.log(error)
        }else{
            console.log(userCreate)
            return callback(userCreate)
        }
    })
        
}
//Acción de modificar.
ModelUser.Modificar = function(post,callback){
    misusuarios[post.posicion].nombre = post.nombre;
    misusuarios[post.posicion].email = post.email;
    misusuarios[post.posicion].telefono = post.telefono;
    return callback({state:true,mensaje:'Usuario actualizado'})
}
//Acción de listar.
ModelUser.Listar = function(post,callback){
    return callback({datos:misusuarios})
}
//Acción de eliminar.
ModelUser.Eliminar = function(post,callback){
    console.log('eliminado')
    console.log(post)
    misusuarios.splice(parseInt(post.posicion),1)
    return callback({state:true,mensaje:'Usuario eliminado'})
}
module.exports.usuario = ModelUser