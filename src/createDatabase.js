let con = require('./connector')
let data = require('./data')

const run = async () => {
    try {
        // ✅ CREATE DATABASE FIRST
        await new Promise((resolve, reject) => {
            con.query('CREATE DATABASE IF NOT EXISTS zomato', (err) => {
                if (err) reject(err)
                else resolve()
            })
        })

        // ✅ USE DATABASE
        await new Promise((resolve, reject) => {
            con.query('USE zomato', (err) => {
                if (err) reject(err)
                else resolve()
            })
        })
        await new Promise((resolve, reject) => {
            con.query('DROP TABLE IF EXISTS orders', (err) => {
                if (err) reject(err)
                else resolve()
            })
        })

        await new Promise((resolve, reject) => {
            con.query(
                'CREATE TABLE orders(_id varchar(200), title varchar(100), description varchar(1000))',
                (err) => {
                    if (err) reject(err)
                    else resolve()
                }
            )
        })

        for (let i = 0; i < data.length; i++) {
            await new Promise((resolve, reject) => {
                con.query(
                    `INSERT INTO orders VALUES (?, ?, ?)`,
                    [data[i]._id, data[i].title, data[i].description],
                    (err) => {
                        if (err) reject(err)
                        else resolve()
                    }
                )
            })
        }

        console.log("Database setup complete ✅")

    } catch (err) {
        console.error(err)
    } finally {
        con.end()
    }
}

run()