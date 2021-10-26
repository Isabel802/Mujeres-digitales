var Identificador = "";
//Carga la información del usuario.
var Cargar = function(){
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open("POST", "http://127.0.0.1:3001/Usuarios/Listar");
    xhr.setRequestHeader("content-type", "aplication/x-www-form-urlencoded");
    xhr.setRequestHeader("cache-control","no-cache");

    xhr.send(data); //Envía la información.

    xhr.addEventListener("readystatechange", function(resultado) {
        console.log(resultado)
        if(this.readyState === 4) {
            console.log(this.responseText);
            var convertido = JSON.parse(this.responseText)
            console.log(convertido)

            var informacion = "";
            var misdatos = document.getElementById('misdatos');

            for (let i = 0; i < convertido.length; i++) {
                informacion +=
                "<tr>"+
                "<th scope='row'>" +
                "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#modalusuario' onclick=CargarId('"+convertido[i]._id+"')>Editar</button></th>"+
                "<td>"+ convertido[i].firstname +"</td>"+
                "<td>"+ convertido[i].email +"</td>"+
                "<td>"+ convertido[i].age +"</td>"+
                "<td><button type='button' class='btn btn-danger' onclick=Eliminar('"+ convertido[i]._id +"')>Eliminar</button></td>"
                "</tr>"
                misdatos.innerHTML = informacion
                
            }
        }
    });
}
//Almacena la información de un usuario.
var Guardar = function(){
    var firstname = document.getElementById('firstname').value
    var email = document.getElementById('email').value
    var edad = document.getElementById('edad').value

    var data = "nombre="+ firstname+"&email="+ email +"&telefono=123&edad="+ edad +"";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open("POST", "http://127.0.0.1:3001/Usuarios/Guardar");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
    
    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
        console.log(this.responseText);
        Cargar()
        alert('Usuario creado')
        }
    });     
}
//Eliminar un usuario por medio de un Id.
var Eliminar = function(id){
    swal({
            title: "¿Seguro que desea eliminar el registro?",
            text: "",
            icon: "warning",
            buttons: [
                'No,',
                'Eliminar'
            ],
            dangerMode: true,
        }).then(function(isConfirm) {
            if (isConfirm) {
                swal({
                    title: 'Usuarios',
                    text: 'Usuario eliminado',
                    icon: 'success'
                }).then(function() {
                var data = "Id="+ id +"";
                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;
                xhr.open("POST", "http://127.0.0.1:3001/Usuarios/Eliminar");
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.setRequestHeader("cache-control", "no-cache");
                xhr.send(data);
                xhr.addEventListener("readystatechange", function() {
                    if(this.readyState === 4) {
                    console.log(this.responseText);
                    Cargar()
                    }
                });    
            });
        }
    });
}
//Carga la información por medio de un usuario.
var CargarId = function(id){
    document.getElementById('btnModificar').style = "display:block"
    document.getElementById('btnGuardar').style = "display:none"

console.log(id)
Identificador = id
var data = "id="+id+"";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.open("POST", "http://127.0.0.1:3001/Usuarios/CargarId");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.send(data);
xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
            var convertido = JSON.parse(this.responseText)
            console.log(convertido)
            if(convertido.length > 0){
                document.getElementById('firstname').value = convertido[0].firstname;
                document.getElementById('email').value = convertido[0].email;
                document.getElementById('edad').value = convertido[0].age;
            }
        }
    });
}
//Genera el evento de modificación de un usuario.
var Modificar = function(){
        var firstname = document.getElementById('firstname').value
        var email = document.getElementById('email').value
        var edad = document.getElementById('edad').value

    var data = "Id="+Identificador+"&nombre="+firstname+"&email="+email+"&edad="+edad+"";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

        
    xhr.open("POST", "http://127.0.0.1:3001/Usuarios/Modificar");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(data);
    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
            Cargar()
        }
        });
}
//Limpia todos los campos y los coloca en blanco.
    var Nuevo = function(){
    Identificador = "";
    document.getElementById('firstname').value = ""
    document.getElementById('email').value = ""
    document.getElementById('edad').value = ""
    document.getElementById('btnModificar').style = "display:none"
    document.getElementById('btnGuardar').style = "display:block"
}
Cargar() //Para realizar la carga automática de un registro.