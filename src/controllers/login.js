'use strict';

const verify = require('../../lib/functions')

exports.post = async function(req, res) {
    const body = {
        name: req.body.username,
        password: req.body.password,
        unique_key: req.body.unique_key
    }
    try {
        const token = await verify.createToken(body.unique_key)
        res.status(200).send({ token: token })
    } catch (e) {
        res.status(e.statusCode).send(e)
    }
}