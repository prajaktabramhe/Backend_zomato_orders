console.log("🔥 FILE LOADED: index.js");

require('dotenv').config({ path: __dirname + '/../.env' });

const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const connection = require('./connector');

const port = process.env.PORT || 8080;

// Handle uncaught errors
process.on("uncaughtException", (err) => {
    console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (err) => {
    console.error("UNHANDLED REJECTION:", err);
});

// Middleware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Request logger
app.use((req, res, next) => {
    console.log("🔥 REQUEST HIT:", req.method, req.url);
    next();
});

// Home route
app.get("/", (req, res) => {
    res.send("Backend is running successfully!");
});

// Orders API
app.get("/api/orders", (req, res) => {
    try {
        console.log("HIT /api/orders");

        let { limit, offset } = req.query;

        // Convert query params into numbers
        limit = parseInt(limit) || 10;
        offset = parseInt(offset) || 0;

        console.log("LIMIT:", limit);
        console.log("OFFSET:", offset);

        // MySQL query
        const query = "SELECT * FROM orders LIMIT ?, ?";

        console.log("RUNNING QUERY:", query);

        connection.query(query, [offset, limit], (err, result) => {

            if (err) {
                console.error("MYSQL ERROR:", err);

                return res.status(500).json({
                    success: false,
                    message: "Database Error",
                    error: err.message
                });
            }

            console.log("✅ QUERY SUCCESS");

            res.status(200).json({
                success: true,
                count: result.length,
                data: result
            });
        });

    } catch (error) {

        console.error("SERVER ERROR:", error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
});

// Start server
app.listen(port, () => {
    console.log(`🚀 App listening on port ${port}!`);
});