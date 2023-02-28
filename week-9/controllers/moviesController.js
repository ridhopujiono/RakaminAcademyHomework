const model = require('../models/movieModel.js'); // User Model

exports.movies = async function(req, res) {
    const result = await model.getMovies();
    
    res.status(200).json({
        data: result
    });
}