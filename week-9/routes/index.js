const express = require('express');
const router = express.Router();

// Use controller
const userController = require('../controllers/usersController.js');
const movieController = require('../controllers/moviesController.js');
const middleware = require('../middleware/middleware.js').auth;
// Login Routes
router.post('/', userController.login);
router.post('/register', userController.register);

// Movies Routes
router.get('/movies', middleware, movieController.movies);
router.get('/movies/:id', middleware, movieController.getMovie);
router.post('/movies', middleware, movieController.store); // CREATE MOVIES
router.put('/movies/:id', middleware, movieController.update); // UPDATE MOVIES
router.delete('/movies/:id', middleware, movieController.delete); // DELETE MOVIES

// User Routes
router.get('/users', middleware, userController.users);
router.get('/users/:id', middleware, userController.getUser);
router.post('/users', middleware, userController.store); // CREATE USER
router.put('/users/:id', middleware, userController.update); // UPDATE USER
router.delete('/users/:id', middleware, userController.delete); // DELETE USER

module.exports = router;