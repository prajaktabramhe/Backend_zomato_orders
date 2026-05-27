require('dotenv').config();
const mysql = require('mysql2/promise');

async function run() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
            multipleStatements: true
        });

        console.log("Connected to MySQL");

        await connection.query("CREATE DATABASE IF NOT EXISTS zomato");
        await connection.query("USE zomato");

        await connection.query(`
            CREATE TABLE IF NOT EXISTS orders (
                id INT AUTO_INCREMENT PRIMARY KEY,
                item_name VARCHAR(255),
                price INT
            )
        `);

        await connection.query(`
            INSERT INTO orders (item_name, price)
            VALUES 
            ('Burger',120),
            ('Pizza',300),
            ('Pasta',200)
        `);

        console.log("Database and table created successfully");

        await connection.end();
    } catch (err) {
        console.log("Error:", err);
    }
}

run();