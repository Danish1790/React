const mongoose = require('mongoose');


const ToDoSchema = new mongoose.Schema({
    head:{
        type:String,
        required:true,
        default:'not filled'
    },
    subhead:{
        type:String,
        required:true,
        default:'not filled'
    },
    paragraph:{
        type:String,
        requied:true,
        default:'not filled'
    },
    date:{
        type: Date,
        default: new Date()
    },
    exptime:{
        type:String,
        default:"expiry date not set"
    }
})


const Todo = new mongoose.model('Todo',ToDoSchema)

module.exports = Todo;