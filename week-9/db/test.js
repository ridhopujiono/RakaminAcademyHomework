const pool = require('./connection');
// Test Database Connection
pool.connect((err, res) => {
    console.log(err);
    console.log(res);
})