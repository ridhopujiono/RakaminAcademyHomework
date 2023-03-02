const express = require('express');
const route = require('./routes/index.js');
const app = express();
const morgan = require('morgan')
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('tiny'))

// Call the route
app.use(route);

// Listening App
app.listen(3000);