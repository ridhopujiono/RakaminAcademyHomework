const express = require('express');
const router = express.Router();

// Use controller
const userController = require('../controllers/usersController.js');
const movieController = require('../controllers/moviesController.js');
const middleware = require('../middleware/middleware.js').verifyToken;
// Login Routes
router.post('/', userController.login);
router.post('/register', userController.register);

// Movies Routes
router.get('/movies', middleware, movieController.movies);

module.exports = router;