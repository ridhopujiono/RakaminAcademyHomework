const model = require('../models/movieModel.js'); // User Model

exports.movies = async function (req, res) {
    const result = await model.all();
    res.status(200).json({
        data: result
    });
}
exports.getMovie = async function (req, res) {
    const result = await model.findBy('id', req.params.id);
    res.status(200).json({
        data: result
    });
}

exports.store = async function (req, res) {
    let { title, genres, year } = req.body;
    
    if(!(title && genres && year)){
        res.status(400).json({
            message: "Please fill all the fields!"
        });
    }else{
        year = year.toString();
        try {
            const create = await model.create([title, genres, year]);
            res.status(201).json({
                message: "Movie Added Successfuly!"
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }
}

exports.update = async function (req, res) {
    if(req.body.year){
        req.body.year = req.body.year.toString();
    }
    try {
        const update = await model.update(req.body, { id: req.params.id });
        res.status(201).json({
            message: "Movie Updated Successfuly!"
        });
    } catch (error) {
        throw error;
        res.status(500).json({
            message: error.message
        })
    }
}

exports.delete = async function (req, res) {
    const checkId = await model.findBy('id', req.params.id);
    if(checkId.length > 0){
        const result = await model.delete('id', req.params.id);
        res.status(200).json({
            message: "Movie deleted successfuly!"
        });
    }else{
        res.status(404).json({
            message: "Movie not found!"
        });
    }
}