const express = require('express');

const mongoose = require('mongoose');


const db = 'mongodb://localhost:27017/danishDb'

mongoose.connect(db,{useNewUrlParser:true},{useUnifiedTopology:true},{useFindAndModify:false})

.then(()=>{
    console.log('connection successfull with MongoDb')
})
.catch((err)=>{
    console.log('error while connecting...........')
})

