require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect()

app.get('/users/', (req, res) => {
  connection.query('SELECT * FROM users', function (err, rows, fields) {
    // if (err) throw err

    res.send(rows)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
