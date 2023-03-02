const db = require('../db/connection.js'); // Connection

exports.create = async function (data) {
    const query = "INSERT INTO users (email, password, gender, role) VALUES ($1, $2, $3,$4)";
    const result = await db.query(query, data);
    return result;
}
exports.update = async function (data, where) {
    const columns = Object.keys(data);
    const values = Object.values(data);
    const whereColumn = Object.keys(where);
    const whereValue = Object.values(where);
    const updates = columns.map((column, index) => `${column} = $${index + 1}`).join(', ');
    const query = `UPDATE users SET ${updates} WHERE ${whereColumn[0]} = ${whereValue[0]} RETURNING *`;
    const val = [...values];
    const result = await db.query(query, val);
    return result;
}

exports.delete = async function (keyword, value) {
    const query = 'DELETE FROM users WHERE ' + keyword + '= $1';
    const result = await db.query(query, [value]);
    return result.rows;
}
exports.all = async () => {
    const query = 'SELECT * FROM users';
    const result = await db.query(query);
    return result.rows;
}
exports.findBy = async function (keyword, value) {
    const query = 'SELECT * FROM users WHERE ' + keyword + '= $1';
    const result = await db.query(query, [value]);
    return result.rows;
}