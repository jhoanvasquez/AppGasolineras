const express = require('express');
const mysql = require('mysql2');
const app = express();
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());

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
app.post("/user", function(req, res){
  const sql = 'insert into usuarios (nombre, numero_documento, tipo_documento, sexo, nacionalidad,telefono,direccion_residencia,contrasena) values ?'
  var values = [
    [req.body.name, 11, "req.body.name", "req.body.name", "req.body.name", 11, "req.body.name", "req.body.name",]
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