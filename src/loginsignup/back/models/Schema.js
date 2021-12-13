const mysql = require('mysql');

require('../db/conn')


con.query("CREATE DATABASE login", function (err, result) {
    if (err) throw err;
    console.log("Database created");
});


const table = "CREATE TABLE SignInUsers (name VARCHAR(255), email VARCHAR(255),password VARCHAR(255))";
con.query(table, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});

module.exports = table;