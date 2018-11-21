'use strict';

const jwt = require('jsonwebtoken');
const Config = require('../config');

module.exports = function (req, res, next) {
    const token = req.headers['auth-jwt'];
    if (!token) return res.status(401).send({ message: 'Invalid Token, verify headers of application or please login again' });
    try {
	    req.user = jwt.verify(token, Config.secret_id);
        next();
    } catch (ex) {
        return res.status(400).send({ message: 'Failed to authenticate token.' })
    }
};