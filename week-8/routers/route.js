const express = require('express')
const router = express.Router();
const pool = require('../connection.js');

router.get('/actor', (req, res) => {
    pool.query('SELECT * FROM actor', (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
});
router.get('/film', (req, res) => {
    pool.query('SELECT * FROM film', (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
});
router.get('/film/id/:id', (req, res) => {
    pool.query('SELECT * FROM film WHERE film_id=$1',  [req.params.id] , (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
});
router.get('/category', (req, res) => {
    pool.query('SELECT * FROM category' , (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
});
router.get('/film/category/:category_name', (req, res) => {
    pool.query("SELECT * FROM film as f JOIN film_category as fc ON fc.film_id = f.film_id JOIN category as c ON c.category_id = fc.category_id WHERE c.name =$1", [req.params.category_name] , (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
});

module.exports = router;
