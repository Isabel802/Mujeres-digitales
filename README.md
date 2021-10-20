# Mujeres-digitales

CLASE 26-08-2021 MONGO DB-Instalación y revisión de algunos comandos,al escribir los comandos se da enter

show dbs  :Comando para ver qué BD hay.

show databases: Comando para ver qué BD hay.

Use: Para ubicarse en una BD,seleccionarla o crear una nueva BD.

Ejemplo: use mujeresdigitales

N0TA: No se crea hasta que tenga el primer registro.

db.usuarios.insertOne({nombre.”Isabel”,apellido:”Cerquera”}) : usuarios, Para crear un registro y colocar el nombre, luego el evento de insertar insert.

NOTA: Una tabla es una conexión, un registro es un documento.

show collections: Para ver qué conexiones hay.

db.usuarios.find() : Para encontrar la lista de los registros que están ahí.

db.usuarios.find().pretty() :Para que la búsqueda se vea ordenada.

Para insertar un usuario personalizando el id:

db.usuarios.insertOne({“_id”:1234567, nombre : ‘Isabel’, apellido : ‘Cerquera’})

Apunte: Para limpiar pantalla se escribe cls.

db.usuarios.find({nombre:’Isabel’}) . Ejemplo de búsqueda por la CMD.
