const express = require('express');
const mysql = require('mysql2');
const app = express();


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