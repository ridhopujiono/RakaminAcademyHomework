const db = require('../db/connection.js'); // Connection

exports.getMovies = async () => {
    const query = 'SELECT * FROM movies';
    const result = await db.query(query);
    return result.rows;
}