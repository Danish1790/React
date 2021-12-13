const express = require('express');
const mysql = require('mysql')
const router = express.Router();

require('../db/conn')


console.log('auth is running before')

router.get('/', async (req, res) => {
    await res.send('Hello from router server')
    console.log('auth is running before')
})
console.log('auth is running before')

router.post('/Login', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(422).json({ error: "fill all the fields" })
    }
    try {
        const insertQuery = await `INSERT INTO SignInUsers (name, email,password) VALUES (${name}, ${email},${password})`;
        con.query(insertQuery, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    }catch (err) {
        console.log(err)
    }
})