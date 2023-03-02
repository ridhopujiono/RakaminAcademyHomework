const express = require('express');
const router = express.Router();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Use controller
const userController = require('../controllers/usersController.js');
const movieController = require('../controllers/moviesController.js');
const middleware = require('../middleware/middleware.js').auth;
// Login Routes
router.post('/login', userController.login);
router.post('/register', userController.store);

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

// Swagger API
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
module.exports = router;