const express = require('express')

const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
})

con.connect((err)=>{
    if(err) throw err;
    console.log('connected successfully with mysql...')
})



con.query("USE login", function (err, result) {
    if (err) throw err;
    console.log("Database created");
});


const SignInTable = "CREATE TABLE IF NOT EXISTS SignInUsers  (name VARCHAR(255), email VARCHAR(255),password VARCHAR(255))";
con.query(SignInTable, function (err, result) {
    if (err) throw err;
    console.log("SignInTable created");
});
const LogInTable = "CREATE TABLE IF NOT EXISTS LoginInUsers  (email VARCHAR(255),password VARCHAR(255))";
con.query(LogInTable, function (err, result) {
    if (err) throw err;
    console.log("LogInTable created");
});


module.exports = con;

