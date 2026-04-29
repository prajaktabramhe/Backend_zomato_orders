const express = require("express");
const con = require("./connector");

const app = express();
const PORT = 8080;

app.get("/api/orders", (req, res) => {
    let { limit, offset } = req.query;

    // convert to number
    limit = parseInt(limit);
    offset = parseInt(offset);

    // validation
    if (isNaN(limit) || limit <= 0) {
        limit = 10;
    }

    if (isNaN(offset) || offset < 0) {
        offset = 0;
    }

    const query = "SELECT * FROM orders LIMIT ? OFFSET ?";

    con.query(query, [limit, offset], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Server error");
        }

        res.status(200).json(result);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});