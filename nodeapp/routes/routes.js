var bodyParser = require('body-parser') //Configuración de la librería body-parser.
app.use(bodyParser.json()) //Configuración de la librería body-parser.
app.use(bodyParser.urlencoded({extended:true})) //Configuración de la librería body-parser.
var Usuarios = require(appRoot + '/api/controllers/UserController.js').usuario
var nodemailer = require('nodemailer')
//Rutas para las acciones que se realizan.
app.post('/Usuarios/Guardar',function(request,response){
    Usuarios.Guardar(request,response)
})
app.post('/Usuarios/Modificar',function(request,response){
    Usuarios.Modificar(request,response)
})
app.post('/Usuarios/Eliminar',function(request,response){
    Usuarios.Eliminar(request,response)
})
app.post('/Usuarios/Listar',function(request,response){
    Usuarios.Listar(request,response)
})
app.post('/enviarcorreo',function(request,response){
    //Configuración para envío de correo electrónico.
    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
          user: config.correo,
          pass: config.clavecorreo
        }
    });

    let mailOptions = {
      from: config.correo,
      to: config.correodestino, //A quién se lo envía.
      subject: 'mi asunto', //Asunto del correo.
      text: "Hola este es el mensaje de prueba" //+post.nombre(esto si se quiere agregar inf) //Descripción del correo.
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
           console.log(error)
        }
        response.json({mensaje:'mensaje enviado'})
    })
})
// app.get('/Usuarios/Activar/:nombre',function(request,response){
//     Usuarios.activar(request,response)
// })

// app.post('/mipost',function(request,response){
//     Usuarios.guardar(request,response)
// })

// app.post('/Usuario/Registro',function(request,response){
//     Usuarios.registro(request,response)
// })

// app.post('/Usuario/Login',function(request,response){
//     Usuarios.login(request,response)
// })

