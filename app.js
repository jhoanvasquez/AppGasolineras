const express = require('express');
const mysql = require('mysql2');
var jwt=require('jsonwebtoken');

const app = express();


//Ruta para obtener los registros de la BD
app.get("/", function(req, res){
  
    //Creacion de token
    var tokenData = {
      username: "username"
      // ANY DATA
    }
  
    var token = jwt.sign(tokenData, 'Secret Password', {
      expiresIn: 60 * 60 * 24 // expires in 24 hours
    })
  
    res.send({
      token
    })
      //res.json(results);
    
   
  
});

app.get('/stations', (req, res) => {
  const sql = 'select * from estaciones'
  var token = req.headers['authorization']
  if(!token){
      res.status(401).send({
        error: "Es necesario el token de autenticación"
      })
      return
  }

  token = token.replace('Bearer ', '')

  connection.query(sql,(error, results)=>{
    if(error){
      console.error('error : ' + err.stack);
    }

    if(results.length > 0){
      
      jwt.verify(token, 'Secret Password', function(err, user) {
        if (err) {
          res.status(401).send({
            error: 'Token inválido'
          })
        } else {
          res.json(results);
        }
      })
          
    }
    else{
        res.send('No hay resultados');
    }
  });
  
})

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