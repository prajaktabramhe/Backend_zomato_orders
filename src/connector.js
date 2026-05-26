require('dotenv').config();

const mysql = require('mysql2');

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    multipleStatements: true
});

con.connect((err) => {

    if (err) {
        console.log(
            "failed to connect to mysql server/database",
            err
        );
    } else {
        console.log(
            "connection established with Database!!!!"
        );
    }
});

module.exports = con;