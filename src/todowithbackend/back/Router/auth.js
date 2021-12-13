const express = require('express');
const { connections } = require('mongoose');
const router = express.Router();

require('../db/conn')
const Todo = require('../models/Schema')

router.get('/', (req, res) => {
    res.send('hello from server router')
    // Todo.find({},(err,Schema)=>{
    //     if(err) console.warn(err)
    //     console.log(Schema)
    // })
})

// --------------------------------------------> without async

// router.post('/register',(req,res)=>{

//     const {head,subhead,para,date} = req.body;           // getting data from api

//     if(!head||!subhead||!para||!date){                  // checking if some data is not filled
//         return res.status(422).json({err:'please fill all the fields'})
//     }

//     const todowork = new Todo({head,subhead,para,date}) // saving data into the db thorugh schema collection

//     todowork.save()
//     .then(()=>{
//         res.status(201).json({message:'todo data saved successfully'})
//         console.log(head,subhead,para,date)
//     })
//     .catch((err)=>{
//         res.status(500).json({error:'Failed to save data of todowork'})
//     })
// })


// --------------------------------------------> async


// /-----------------------------------------------------> Saving data into mongodb
router.post('/register', async (req, res) => {
    const { head, subhead, paragraph, date,exptime } = req.body;
    if (!head || !subhead || !paragraph) {
        return res.status(422).json({ error: "please fill all the fields correctly" })
    }

    try {
        const todowork = new Todo({ head, subhead, paragraph, date,exptime });
        const work = await todowork.save();

        if (work) {
            res.status(201).json({ message: "work added successly" })
            console.log(head, subhead, paragraph, date,exptime)
        } else {
            res.status(500).json({ error: "work not added" })
        }

    } catch (err) {
        console.log(err)
    }
})

// ========================================> Getting data from mongodb  
router.get('/register', async (req, res) => {
    const { head, subhead, paragraph, date,exptime } = req.body;

    try {
        Todo.find({}, async (err, Schema) => {
            if (err) console.log(err)
            const saved = Schema
            const savedWork = await saved
            console.log(savedWork)
            if (savedWork) {
                res.status(201).json({ message: savedWork })
            }
            else {
                res.status(500).json({ error: "Error while fetching data from mongo db" })
            }
        })
    } catch (error) {
        console.log(error)
    }
})

// ------------------------------------------------> delete request
router.delete('/delete', async (req, res) => {
    const { head, subhead, paragraph, date,exptime } = req.body;
    console.log(req.body)
    try {
        const deleted = await Todo.deleteOne({
            head: head,
        },(err,obj)=>{
            if(err) console.log(err)
            console.log('data deleted successfullt')
            console.log(obj)
        })
        console.log('this is deleted',deleted)

        const delone = await deleted;
        console.log(delone)

        if(delone){
            res.status(201).json({message:delone})
        }
        else{
            res.status(500).json({error:"Error occured while deleting"})
        }

    } catch (error) {
        console.log(error)
    }
})


module.exports = router;