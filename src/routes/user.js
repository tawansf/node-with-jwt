'use strict';

const router = require ('express').Router();
const controller = require('../controllers/user');
const auth = require('../../middleware/authentication')

router.get('/', auth, controller.get);

module.exports = router;