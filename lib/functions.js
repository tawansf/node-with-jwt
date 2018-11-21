'use strict';

const Error = require('http-errors');
const jwt = require('jsonwebtoken');
const Config = require('../config');

exports.createToken = (key) => new Promise((resolve, reject) => {
    const sub = key;
    const iss = Config.iss;
    const tk = jwt.sign({iss, sub}, Config.secret_id, { expiresIn: '1h' });
    if (tk) {
        resolve(tk)
    } else {
        reject(Error(400, 'Could Not Authenticate', {auth: false}))
    }
});