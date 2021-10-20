# Mujeres-digitales

23-08-2021-Levantar el servidor, instalación -desinstalación de un paquete.

NOTA: En el documento package.son es opcional colocar el ^,lo que hace es traer la versión más actualizada

"express": "^4.17.1" //Forma en la que se fije la versión del proyecto.

Para la instalación de un paquete se escribe: npm install nodemon.

Para desinstalar un paquete se escribe: npm unistall nodemon.

npm install –g nodemon : Significa que el paquete se instala de forma global, ambiente del equipo(Windows,Linux).

npm install  nodemon –save(Es el que se instaló) : Se realiza para que aparezca en el archivo package.json.

-EL PAQUETE DE NODEMON LO QUE HACE ES EVITAR ESTAR LEVANTANDO Y LEVANTANDO EL SERVICIO.

NOTA: Cuando se instala el paquete la forma de levantar node es: nodemon app.js

-En caso de que no se reconozca el servicio se debe escribir : 

npm install  -g  nodemon –sabe

Y para levantar el proyecto es :

nodemon app.js

Por lo general para levantar un proyecto es escribiendo npm start.

Se crea carpeta de routes, en app.js se require la ruta.

Se crea la carpeta api

En el archivo app.js hay que tener encuentra que esté el global.app = express()

MVC

MODELO: Lo que tiene que ver con BD, la inserción de BD. Donde la información llega limpia.

VISTA: Lo que se ve. Index,login,etc.

CONTROLADOR: Es un archivo que se encarga de validar la información.

La vista envía la información a la ruta, la ruta la envía al controlador y el controlador al verificar la pasa al modelo.

Para emplear la estructura MVC se crea una carpeta adicional llamada api con los modelos, vista y controladores y en el archivo routes.js se emplea la ruta que se crea.

En el documento app.js

Lo que valida el Frontend

global.appRoot = path.resolve(__dirname) //La raiz del aplicativo.

NOTA: Para la implementación de un método POST se debe ingresar a : https://www.postman.com/, en la parte de https://www.postman.com/api-platform/ sale la opción de descargar el Postman ROI

PARA QUE SE EJECUTE CORRECTAMENTE CADA UNO DE LAS PETICIONES POST SE DEBE DESCARGAR UNA LIBRERÍA:

npm  install body-parser

NOTA: Antes de instalar una librería se debe parar el servicio y una vez instalado en el archivo routes.js se configura:

var bodyParser = require('body-parser') //Configuración de la librería body-parser.

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))


