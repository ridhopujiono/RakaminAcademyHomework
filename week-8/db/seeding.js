const pool = require('../connection');
const fs = require('fs');

const seedQuery = fs.readFileSync('db/seeding.sql', {encoding: 'utf8'});
pool.query(seedQuery, (err, res) => {
    if(err){
        console.log(err)
    }
    console.log('Seeding Completed');
    pool.end();
});