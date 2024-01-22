//1 import express
const express = require('express')

//2 import cors 
const cors = require('cors')

// 3 create a backend application using express
const cmaServer = express()

//4
cmaServer.use(cors({
    origin:'http://localhost:3000'
 }))

 //5 Convert the json data to js and js to json using json()  function

cmaServer.use(express.json())

//6 Define the port number

cmaServer.listen(8000,()=>{
    console.log('Ems server listening on the port 8000')
})


//import logic
const  logic = require('./services/logic')


//Api call for all contact details
cmaServer.get('/get-all-contacts',(req,res)=>{
    logic.getAllContacts().then((response) => {
        //respons - all contact details
        res.status(response.statusCode).json(response);
    })
})