var mensajeria=function(mensaje,tipo){ //El mensaje se coloca para que se envie y se muestre.
    var contenedormensajes = document.getElementById('divmensajes') //Nombre del contenedor del longin.html
    contenedormensajes.innerHTML += '<div class="alert alert-'+ tipo +'" role="alert">'+
    mensaje +
    '</div>'
    //Muestra el mensaje y despues de 5seg se borra.
    setTimeout(function(){ //Se emplea para que una vez se valide el alert, se demore 5 seg.
        $('.alert').alert('close')
    },5000)
}
var ojo = function() {
    if( document.getElementById('inputPassword').type == "text"){
        document.getElementById('inputPassword').type = "password"
    }
    else{
        document.getElementById('inputPassword').type = "text"
    }
}
var validarpassword = function(password){
    var password = document.getElementById('inputPassword').value
     //Validación de contraseña.
    //  if(password.length <8){
    //     mensajeria('El password debe superar 8 caracteres','warning')
    //     return false;
    // }
    // if(password.length >=11){
    //     mensajeria('El password debe ser menor de 10 caracteres','warning')
    //     return false;
    // }
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
    if(regex.test(password) == false){
        mensajeria('Password inseguro','success')
        return false
    }
}
var iniciarsesion = function(){
    var email = document.getElementById('inputEmail').value
    var password = document.getElementById('inputPassword').value
    console.log(email)
    console.log(password)
    document.getElementById('inputEmail').classList.remove=("borderojo") //Se aplica para que en caso de que no existan errores no se muestre el borde rojo en la caja de texto.
    document.getElementById('inputPassword').classList.remove=("borderojo")
    //Para que no queden vacios.
    if(email ==null || email  == '' || email  == undefined){
        //alert('Email es obligatorio')
        mensajeria('El email es obligatorio','danger'); //Se llama la función para mostrar el mensaje.
        document.getElementById('inputEmail').classList.add =("borderojo") //Se aplica la clase al elemento para que cambie de color la caja al ingresar datos incorrectos.
        document.getElementById('inputEmail').focus() //Para enfocar la caja de texto que falta por llenar.
        return false
    }
    validarpassword();
    // if(password ==null || password == '' || password == undefined){
    //     mensajeria('El password es obligatorio','danger');
    //     document.getElementById('inputPassword').classList.add =("borderojo")
    //     document.getElementById('inputPassword').focus()
    //     return false
    // }
    // //Validar mayúsculas en la contraseña.
    // var miPalabra = password;
    // var sihayunaletra = 0;
    // for(var index = 0; index < miPalabra.length; index++)
    // {
    //     var letraActual = miPalabra.charAt(index);
    //     //console.log(letraActual)
    //     if(letraActual === letraActual.toUpperCase()){
    //         sihayunaletra = 1
    //         console.log('Existe una letra mayúscula')
    //     }
    //     if(index == miPalabra.length -1){
    //         if(sihayunaletra ==0){
    //             mensajeria('El password debe tener alguna mayúscula','warning')
    //             return false
    //         }
    //     }
    //}
    // var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; //Expresión regular para validar correo.
    // if(emailRegex.test(email)){
    //     alert('Correo valido')
    // }else{
    //     mensajeria ('Correo invalido','danger'); //Recibe el tipo para mostrar mensaje con diseño.
    //  return false;
    // }
}

