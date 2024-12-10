const express = require("express");
const mysql = require("mysql");
const app = express ();

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "projectarture",
});

database.connect((err) => {
    if(err) throw err;
    console.log("Database connected");
});

//gerbang utama masuk API alamat awal
app.get("/home", (req, res) => {
    database.query("SELECT*FROM users", (err, rows) => {
        if(err) throw err;
        res.json({
            success: true,
            message: "getting users data",
            data: rows,
        });
    });
    res.send("Hello World");
});


//jalanin port di 3001
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});