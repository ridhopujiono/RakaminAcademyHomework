const fs = require('fs');
const Pool = require('pg').Pool;
// Get config from database.json
const config = JSON.parse(fs.readFileSync('database.json', 'utf8')); 
const pool = new Pool(config.dev);
module.exports = pool;