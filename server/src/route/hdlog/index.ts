import express = require('express');
import db = require('../../mongo/hcc/hdLog/main');
import ResForm = require('../ResForm');

var router = express.Router();
router

    .get('/', (req, res)=> {
        db.findOne((err, result)=> {
            res.json(new ResForm(err, result));
        })
    });

export = router;