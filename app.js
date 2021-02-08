const express = require('express');
const mysql = require('mysql2');
const app = express();
var bodyParser = require('body-parser')
var cors = require('cors')
const bcrypt = require('bcrypt');


app.use(cors())
app.use(bodyParser.json());
const saltRounds = 10;

//Ruta para obtener los registros de la BD
app.get("/", function(req, res){
  const sql = 'select * from estaciones'
  connection.query(sql,(error, results)=>{
    if(error){
      console.error('error : ' + err.stack);
    }

    if(results.length > 0){
      res.json(results);
    }
    else{
      res.send('No hay resultados');
    }
  });
});

//Ruta para insertar usuarios en la BD
app.get("/user", function(req, res){
  const sql = "select * from usuarios where id="+req.body.id
  
  connection.query(sql,(error, results)=>{
    if(error){
      console.error('error : ' + error.stack);
    }

    if(results.length > 0){
      res.json(results);
    }
    else{
      res.send('No hay resultados');
    }
  });
});


//Ruta para insertar usuarios en la BD
app.post("/user", function(req, res){

//Encriptacion de contraseña 
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(req.body.contrasena, salt);
  
const sql = 'insert into usuarios (nombre, numero_documento, tipo_documento, sexo, nacionalidad,telefono,direccion_residencia,contrasena) values ?'

var values = [
  [req.body.nombre, req.body.numero_documento, req.body.tipo_documento, req.body.sexo, req.body.nacionalidad, req.body.telefono, req.body.direccion_residencia, hash]
]

connection.query(sql,[values],(error, results)=>{
  if (error) throw error;
  console.log("Number of records inserted: " + results.affectedRows);

});

})



//Ruta para editar usuario
app.put('/user', function (req, res) {
  
  //const sql = "update usuarios set nombre=?, numero_documento=?, tipo_documento=?, sexo=?, nacionalidad=?,telefono=?,direccion_residencia=? where id =?"
  const sql = "update usuarios set nombre='"+req.body.nombre+
  "',numero_documento='"+ req.body.numero_documento+
  "',tipo_documento='"+ req.body.tipo_documento+
  "',sexo='"+ req.body.sexo+
  "',nacionalidad='"+ req.body.nacionalidad+
  "',telefono='"+ req.body.telefono+
  "',direccion_residencia='"+ req.body.direccion_residencia+
  "' where id ="+req.body.id
  /*var values = [
    [req.body.name, req.body.numero_documento, req.body.tipo_documento, req.body.sexo, req.body.nacionalidad, req.body.telefono, req.body.direccion_residencia, req.body.contrasena, req.body.id]
  ]*/
  connection.query(sql,(error, results)=>{
    if (error) throw error;
    console.log("Number of records updates: " + results.affectedRows);

  });
}); 

//Ruta para remove usuario
app.delete('/user', function (req, res) {
  const sql = "delete from usuarios where id ="+req.body.id
  
  connection.query(sql,(error, results)=>{
    if (error) throw error;
    console.log("Number of records updates: " + results.affectedRows);

  });
}); 


//Ruta para insertar estaciones en la BD
app.post("/station", function(req, res){
  const sql = 'insert into estaciones (nombre, numero_documento, tipo_documento, sexo, nacionalidad,telefono,direccion_residencia,contrasena) values ?'
  var values = [
    [req.body.nombre, 11, "req.body.name", "req.body.name", "req.body.name", 11, "req.body.name", "req.body.name",]
  ]
  connection.query(sql,[values],(error, results)=>{
    if (error) throw error;
    console.log("Number of records inserted: " + results.affectedRows);

  });
});

//MySql

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'data',
    password: '',
  });


//Error connection
connection.connect(function(err) {
  
  if(err){
    console.error('error : ' + err.stack);
  }
  
});
  
app.listen(3000,()=>console.log('Servidor corriendo'));