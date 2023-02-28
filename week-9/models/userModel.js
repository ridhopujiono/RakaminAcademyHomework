const db = require('../db/connection.js'); // Connection

exports.create = async function(data){
    const query = "INSERT INTO users (email, password, gender, role) VALUES ($1, $2, $3,$4)";
    const result = await db.query(query, data);
    return result;
}
exports.findByEmail = async function(email){
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await db.query(query, [email]);
    return result.rows;
}