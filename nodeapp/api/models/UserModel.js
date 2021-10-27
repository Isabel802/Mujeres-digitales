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
            return callback(userCreate)
        }
    })
        
}
//Acción de modificar.
ModelUser.Modificar = function(post,callback){
    Mymodel.findByIdAndUpdate(post.Id,
    {
        firstname:post.nombre
        ,email:post.email
        ,age:post.edad
    },(error,respueta) => {
        if(error){
            console.log(error)
            return callback(error)
        }else{
            console.log(respueta)
            return callback({state:true,mensaje:'Usuario modificado'})
        }
    })
}
//Acción de listar.
ModelUser.Listar = function(post,callback){
    Mymodel.find({},{__v:0},(error,documentos) => {
        if(error){
            console.log(error)
            return callback(error)
        }else{
            console.log(documentos)
            return callback(documentos)
        }
    })
}
//Acción de CargarId.
ModelUser.CargarId = function(post,callback){
    Mymodel.find({_id: post.id},{__v:0},(error,documentos) => {
        if(error){
            console.log(error)
            return callback(error)
        }else{
            console.log(documentos)
            return callback(documentos)
        }
    })
}
//Acción de eliminar.
ModelUser.Eliminar = function(post,callback){
    Mymodel.findByIdAndDelete(post.Id,(error,resultado) => {
        if(error){
            console.log(error)
            return callback(error)
        }else{
            return callback({state:true,mensaje:'Usuario eliminado'})
        }
    })
}
module.exports.usuario = ModelUser