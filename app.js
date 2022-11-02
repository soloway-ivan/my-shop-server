// var db_config = {
//   host: 'eu-central.connect.cloud',
//     user: 'j8oln6dfyz1pbx1nvz7f',
//     password: 'reqwow99',
//     database: 'shop-app'
// };

// const mysql = require('mysql2')
// require('dotenv').config();
// const express = require('express')
// const app = express()
// const port = process.env.PORT || 3000

// function handleDisconnect() {
//   connection = mysql.createConnection(process.env.DATABASE_URL); // Recreate the connection, since
//                                                   // the old one cannot be reused.

//   connection.connect(function(err) {              // The server is either down
//     if(err) {                                     // or restarting (takes a while sometimes).
//       console.log('error when connecting to db:', err);
//       setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//     }                                     // to avoid a hot loop, and to allow our node script to
//   });                                     // process asynchronous requests in the meantime.
//                                           // If you're also serving http, display a 503 error.
//   connection.on('error', function(err) {
//     console.log('db error', err);
//     if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//       handleDisconnect();                         // lost due to either server restart, or a
//     } else {                                      // connnection idle timeout (the wait_timeout
//       throw err;                                  // server variable configures this)
//     }
//   });
// }

// handleDisconnect();

require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect()

app.get('/', (req, res) => {
  connection.query('SELECT * FROM users', function (err, rows, fields) {
    if (err) throw err

    res.send(rows)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})