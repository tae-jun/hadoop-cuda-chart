import path = require('path');
import express = require('express');
var config = require('../config').route;

config.distDir = path.resolve(__dirname, '../../../', config.distDir);
config.imgDir = path.resolve(__dirname, '../../../', config.imgDir);
config.bowerDir = path.resolve(__dirname, '../../../', config.bowerDir);

var router = express.Router();
router

    .use('/', express.static(config.distDir))

    .use('/history', require('./history/index'))

    .use('/img', express.static(config.imgDir))

    .use('/bower', express.static(config.bowerDir));

export = router;