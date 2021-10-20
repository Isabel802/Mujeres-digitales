var usercontroller = {}
var misdatos = [];
usercontroller.guardar = function(request,response){
    //Cuando la petición es GET se utiliza request.params.
    //Cuando la petición es POST se utiliza request.body.
    var datos = {
        name:request.params.nombre
    }
    console.log(datos)
    if(datos.name == '' || datos.name == undefined || datos.name == null){
        response.json({state:false,mensaje:'El nombre es un campo obligatorio'})
        return false;
    }
    if(datos.name.length <= 5){
        response.json({state:false,mensaje:'El nombre debe superar 5 caracteres'})
        return false;
    }
    if(datos.name.length >= 15){
        response.json({state:false,mensaje:'El nombre no puede superar 15 caracteres'})
        return false;
    }
    misdatos.push(datos.name)
    response.json({mensaje:'Usuario guardado',usuario:misdatos})
}
module.exports.usuario = usercontroller