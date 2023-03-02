const db = require('../db/connection.js'); // Connection

exports.all = async () => {
    const query = 'SELECT * FROM movies';
    const result = await db.query(query);
    return result.rows;
}
exports.findBy = async function (keyword, value) {
    const query = 'SELECT * FROM movies WHERE ' + keyword + '= $1';
    const result = await db.query(query, [value]);
    return result.rows;
}
exports.create = async function (data) {
    const query = "INSERT INTO movies (title, genres, year) VALUES ($1, $2, $3)";
    const result = await db.query(query, data);
    return result;
}
exports.update = async function (data, where) {
    const columns = Object.keys(data);
    const values = Object.values(data);
    const whereColumn = Object.keys(where);
    const whereValue = Object.values(where);
    const updates = columns.map((column, index) => `${column} = $${index + 1}`).join(', ');
    const query = `UPDATE movies SET ${updates} WHERE ${whereColumn[0]} = ${whereValue[0]} RETURNING *`;
    const val = [...values];
    const result = await db.query(query, val);
    return result;
}

exports.delete = async function (keyword, value) {
    const query = 'DELETE FROM movies WHERE ' + keyword + '= $1';
    const result = await db.query(query, [value]);
    return result.rows;
}
