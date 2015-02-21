import express = require('express');
import configAll = require('../config');
import config = configAll.route;

var router = express.Router();
router

    .use('/', express.static(config.distDir))

    .use('/img', express.static(config.imgDir))

    .use('/bower', express.static(config.bowerDir))

    .use('/hdlog', require('./hdlog/index'));

export = router;
