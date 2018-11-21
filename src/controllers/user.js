'use strict';

const db = require('../model-exemple/user')

exports.get = async function(req, res) {
    try {
        const getUsers = await db.getUser()
        res.status(200).send(getUsers)
    } catch (e) {
        res.status(e.statusCode).send(e)
    }
}