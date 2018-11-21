'use strict';

const router = require ('express').Router();
const controller = require('../controllers/login');

router.post('/', controller.post);

module.exports = router;