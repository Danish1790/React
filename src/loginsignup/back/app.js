const express = require('express');
const mysql = require('mysql')
const app = express();
const port = 8000;


const con = require('./db/conn')

app.use(express.json())



// ======================================================================================


// require('./router/auth')
// app.use(require('./router/auth'))

app.post('/Login', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(422).json({ error: "fill all the fields" })
    }
    try {
        const insertQuery = await `INSERT INTO SignInUsers (name, email,password) VALUES ("${name}", "${email}","${password}")`;
        con.query(insertQuery, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    } catch (err) {
        console.log(err)
    }
})

let Result;
app.post('/Welcome', async (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "fill all the fields" })
    }
    try {
        const insertQuery = await `INSERT INTO LoginInUsers (email,password) VALUES ("${email}","${password}")`;
        con.query(insertQuery, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });

        const Checking = await `SELECT name FROM SignInUsers WHERE email='${email}' AND  password='${password}'`
        con.query(Checking, (err, result) => {
            if (err) throw err;
            Result = result;
            console.log('Result---->',Result)
            if (Result.length == 0) {
                console.log('user not Exists')
            }
            else{
                console.log('user  Exists')
            }
        })
    } catch (err) {
        console.log(err)
    }
})

app.get('/permission',async (req,res)=>{
    // const {Result} = req.body;
    try {
        res.status(201).json({message:Result})
    } catch (error) {
        console.log(error)
    }
})


// =======================================================================================
app.get('/', (req, res) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log('sever listening on port', port)
})