const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const port = 8000;


require('./db/conn')                            // db file connection

const Todo = require('./models/Schema');        // schema file

app.use(express.json())                         // converting requests json 

app.use(require('./Router/auth'))               // apis requests file




// ===================================..
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log('Server is running on port ',port)
})