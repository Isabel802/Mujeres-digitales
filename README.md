# Mujeres-digitales

20-08-2021-Explicación de una API,instalación de Node.

Una API es un intermediario que permite calcular la información independientemente de donde estén hechas las aplicaciones.

Básicamente consiste en que el Frontend se comunica con el backend y en él hay una Api.

API REST:  Es una aplicación en el backend que contesta las llamadas de URLs.

NODE: Para instalarlo lo que se debe hacer es acceder al siguiente link.

https://nodejs.org/es/

Una vez instalado lo que se hace es abrir el CMD. Se escribe  node –v.

NOTA: Muchas veces algunos proyectos se trabajan en versiones diferentes, lo que es importante saber en qué versión se encuentra si se va a trabajar con alguno.

NODE 
1.Cuando se instala viene con un paquete adicional llamado npm, manejador de paquete de red.
Manejador de paquete: Es un paquete que contiene información js donde tiene funcionalidades ya programadas y procesadas. Lo que se hace es importar los paquetes al proyecto.

2. Para saber si se tiene instalado el npm se escribe: npm –v ,y nos dice la versión que tiene.
Npm: Maneja los paquetes.

3. Para iniciar a trabajar se escriben los comandos cd Desktop
Y luego node 4*5.como ya está instalado se puede hacer esto.

node console.log(4*5)

cd Desktop

npm –v

node, cuando ya se escribe esto,entra a la consola de node.

Un ejemplo para entrar por consola:

console.log(‘Hola’)

Ctrl+C : Para salir de ahí.

Para iniciar se crea una carpeta normalmente.

cd nodeapp: Para ingresar a una carpeta creada, cd y el nombre de la carpeta.

dir 

npm init: Indica el nombre del package name. Se da Enter.

Muestra la versión donde es opcional cambiarla.

La descripción, donde se puede escribir algo acerca de la app.

El entry point donde se muestra con index.js pero se aconseja usar el app.js, pues así se encuentra en la mayoría de las búsquedas de internet o como server.js.

test command: Se da Enter.

git repository: Como no se tiene creado git para el backend, se deja normal.

keywords: Son palabras claves ,se puede dejar normal.

author: Se escribe el nombre de la persona que lo hace.

License: (ISC) : Es la licencia que viene por defecto,se da Enter. MUESTRA LA INFORMACIÓN AGREGADA ANTERIORMENTE y se escribe yes. SI SE REVISA LA CARPETA CREADA YA ESTÁ EL PAQUETE CON LO DEFINIDO ANTERIORMENTE.

Lo primero que se debe hacer es crear un archivo que se llame app.js

En el caso que se quiera ejecutar lo escrito en un archivo 

Ejemplo:

console.log('Hola mundo')

En la consola se escribe node app.js

PARA MONTAR UN SERVIDOR:

1.Es necesario la librería llamada EXPRESS(Es como si se trabajara con XAMPP).

-Para instalarlo(es un paquete) se escribe en consola:

Npm install express o Npm i express y se da Enter. Si se revisa el archivo app.js aparece una línea con dependencies y además un archivo nuevo llamado package-lock.json

NOTA: Cuando uno instala un paquete es como si se instalara una dependencia.

La carpeta node_modules son las funcionalidades que ya vienen predefinidas para trabajar con Express.

Express permite exponer API, páginas HTML, conectarse a BD, procesar información, hacer ajustes de seguridad. EN ESTE CASO LO ESTAMOS HACIENDO PARA CREAR UN SERVIDOR QUE MUESTRE UNA PÁGINA WEB. También puede describirse como un framework.

NOTA: En caso de que el proyecto se quiera subir a un repositorio la carpeta node_modules no sube. Porque se instala cada vez que uno quiere un comando.

NOTA: En caso de que no se tenga la carpeta node_modules pero si la del package.json se debe instalar nuevamente esta carpeta escribiendo:

npm install

Para iniciar con la creación de la app

Se debe escribir lo siguiente en el archivo app.js

var express = require('express') //1.Se hace llamado a el paquete de express.

var aplicacion = express()//Se crea la app,tiene el dominio de todo.

var port = 3000; //Se coloca el número de preferencia,lo importante es saber cuál es.

aplicacion.listen(port,function(){ //Se hace un llamado por medio del listen
    console.log('Servidor iniciado por el puerto' + port)
})

Para luego ir al CMD y escribir node app.js,se da ENTER para hacer el uso del puerto que se definió. Si se quiere ver esto en el navegador se escribe:

http://localhost:3000/ : Esto es dependiendo el número del puerto.

NOTA: Cada vez que se haga un cambio se debe levantar el servidor.

FORMAS EN LAS QUE SE REFIEREN AL EQUIPO LOCAL:

1.Localhost

2.  127.0.0.1 que también significa localhost.

3. Con la dirección IP local

Que para saber cuál es en la consola se escribe:

Ipconfig/all


Ejemplo: 192.168.0.18: acánúmerodelpuerto.

NOTAS

/: Significa que es un parámetro que debe recibir.
app.use('/',express.static(__dirname + '/Pagina'))

: Para crear una ruta estática.

dirname : Variable publica, hace referencia al directorio local(Raíz del proyecto).
nodemon
