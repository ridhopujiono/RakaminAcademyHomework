const pool = require('./connection');
const express = require('express');
const app = express();
const route = require('./routers/route.js');

// Test Database Connection
// pool.connect((err, res) => {
//     console.log(err);
//     console.log(res);
// })

//  Routings
app.use(route)
app.listen(3000)