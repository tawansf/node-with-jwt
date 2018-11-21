'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const helmet = require('helmet');
const logger = require('morgan');
const user = require('./src/routes/user');
const login = require('./src/routes/login');
const index = require('./src/routes/index');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuration
app.use(express.json());
app.use(logger('combined'));
app.use(helmet());
    
// Routes
app.use('/', index);
app.use('/user', user);
app.use('/login', login);

module.exports = app;