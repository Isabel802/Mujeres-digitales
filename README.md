# Mujeres-digitales

30-08-2021-Resolver posible problema en GitHub,repaso de comandos, conectarse a BD de Mongo.

En caso de que en GitHub se presente un inconveniente lo que se debe hacer es:

-Ir a setting.

-Developer settings.

-Personal access tokens.

-Generate new token.

-En la lista de opciones que aparecen seleccionar: repo.

- admin:repo_hook.

- delete_repo

En la parte de expiración seleccionar la No expiration.

Este proceso se realiza en caso de que no coja el password de GitHub y no suban los archivos deseados, la contraseña es  copiar el token que se crea.

PARA LA CMD

En caso de que solo se quiera mostrar cierta información,se debe:

db.personal.find({age:10},{age:1}).pretty() .Se coloca el 1 ya que significa mostrar, si no se quisiera mostrar se colocaría el 0.

En caso de que no se quiera mostrar el id:

db.personal.find({age:10},{age:1,_id:0}).pretty()

En caso de solo querer ver los nombres:

db.personal.find({},{nombre:1,_id:0}).pretty()

FORMAS PARA LEVANTAR UN SERVIDOR:
-nodemon star 

1.npm star

2.nodemon app.js

3.node app.js

NOTA:Antes de iniciarlo hay que ubicarse en el cd

Cd Desktop

cd nodeapp,luego sí se inicializa el servidor.

Lo que se hace luego es escribir en la barra de búsqueda : 127.0.0.1-3001

NOTA IMPORTANTE:
Para hacer uso de la BD hay que instalar el paquete mongoose:

npm i mongoose

Para obtener el archivo de conexión en la consola se escribe mongo
 
Una vez se realiza esto se escribe show dbs para revisar las BD, se guardan cambios y se levanta el servicio.

NOTA: Al momento de revisar si se creó la BD, hay que tener en cuenta que hay que tener registros.
 
Una vez se tienen los registros en la CMD se puede observar si ya está la BD.

Se escribe:

mongo

show dbs

use nombredelabd

show collections
