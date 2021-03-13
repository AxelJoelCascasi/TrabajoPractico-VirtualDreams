const express = require('express');
const  rq = require('request');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());

app.get('/',(req, res)=>{ //probando si responde el servidor
    res.send('hola');
})

app.post('/', function(req, res)  {
    console.log(req.body.apellido) // vemos si me trae el apellido antes de entrar a la validacion 
    
    var cantAt = Object.keys(req.body).length
    console.log(cantAt)

    if(cantAt<=3 &&  validacion(req.body.nombre,req.body.apellido,req.body.dni)){
        console.log('por aca paso')
        rq.post('https://reclutamiento-14cf7.firebaseio.com/personas.json ',
        {
            json:{
                "nombre": req.body.nombre ,
                "apellido":req.body.apellido,
                "dni":req.body.dni
            }
        },
        function(error,responde,body){
            if(!error)
            res.send('Status Code : 201')
            else
            res.send('Status Code : 500')
        })
    }else
    {
    res.send('Status Code: 400')
    }
    
});

app.listen(8001,()=>{
    console.log('El servidor esta escuchando'); // da de alta el servidor
})

function validacion(nombre,apellido,dni){ // funcion de validacion de datos
    if(!apellido || !dni)
    {
        console.log('error apellido o dni no existe')
        return 0;
    }
    
    if(/[^a-zA-Z]/.test(apellido))
    {
        console.log('error apellido')
        return 0;
    }

    if(!nombre && /[^a-zA-Z]/.test(nombre))
    {
        console.log('error nombre')
        return 0;
    }

    var stringDni = dni.toString();
    if(stringDni.length > 10 )
    {
        console.log('error dni')
        return 0;
    }

    return 1;
}