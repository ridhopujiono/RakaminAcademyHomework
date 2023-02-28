const express = require('express');
const route = require('./routes/index.js');
const app = express();
const cookieParser = require('cookie-parser');  

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// Call the route
app.use(route);

// Listening App
app.listen(3000);