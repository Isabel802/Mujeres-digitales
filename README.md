# Mujeres-digitales

CLASE 27-08-2021 MONGO DB-Soluciones a posibles errores y explicación de algunos operadores.

Al instalar mongoDB puede que existan algunos inconvenientes al tratar de conectarse a mongo.

Connect failed, sucede porque: no está iniciado el servicio de mongoDb.

Para arreglarlo, en el buscador se escribe servicios, se selecciona, por la m se busca donde dice mongoDB Server y se selecciona. Así se arregla el problema y luego sí se puede ir a la consola y escribir mongo para ser uso de él. En caso de que se realice el proceso y no funcione se debe instalar nuevamente. 

NOTA: Por MongoDBCompas también se puede realizar la conexión entrando al programa y copiando la conexión que aparece en la consola y se da clic en conectar. 

Cadena de conexión de mongoDB
 
Abrir consola con administrador tiene más privilegios.

Algunos comandos para tener en cuenta:
 
NOTA IMPORTANTE:  Min 44:26 Inicia con el tema del CRUD.
COMANDOS:

show collections : Ver las conexiones que existen.

db.usuarios.find() : Ver los datos que tiene la conexión.

db.nombretabla.insertMany({})  : Para crear tabla .

Ejemplo: Db.nombretabla.insertMany([{producto:’papel’,{producto:’carton’}])  la forma es esta para los arreglos como en este caso.

db.ventas.find().count() : Cuenta cuantos registros hay.

db.ventas.updateMany({producto:’papel’},{$set:{producto:’Papel1’}})  : Para editar uno de los registros que hay, primero el criterio de búsqueda y luego la modificación que quiere que se cambie. MODIFICA TODAS LAS COINCIDENCIAS QUE EXISTAN.

PARA REALIZAR UNA MODIFICACIÓN PRECISA:

db.ventas.updateOne({_id:ObjectId(“iddelusuario”)},{$set:{producto:’Papel11’}}) 

db.ventas.updateMany({},{$set:{estado’Activo’}}):Para agregar una característica más a las que existan, de esta manera se modifican todos los que se tenga en la tabla.

DELETE: Para eliminar registros.No es necesario colocar el id. Ejemplo:

db.ventas.deleteMany({producto:’Carton11’})

Para eliminar más de un registro

db.ventas.deleteMany([{_id:ObjectId(“idquesevaaborrar”)},{_id:ObjectId(“idquesevaaborrar”)}])

db.ventas.deleteMany({}) : Borrar todos los registros.

db.ventas.drop()  :Para borrar una colección.

db.usuarios.find({$or:[{nombre:’Isabel’},nombre:’Daniela’}]})  :Para traer alguno de los registros de los que existen.

db.usuarios.find({$and:[{nombre:’Isabel’},nombre:’Daniela’}]})  :Para traer alguno de los registros de los que existen.

db.usuarios.find({$and[{apellidos:’’},{apellidos:{$exist:true}}]})  :Condicion de que muestre el apellido cuando exista. No afecta que no exista una de las características,se va por la que encuentre y la muestra.

Forma para hacer una nueva tabla:
 
$gt donde es >

$ne que significa != 

$gte que significa mayor o igual.

Un ejemplo empleándolos es:
 
db.nombredelatabla.renameCollection(“Nuevatabla”) :Para cambiar el nombre de la tabla.
