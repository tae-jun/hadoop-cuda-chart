import express = require('express');
import db = require('../../mongo/hcc/hdLog/main');

var router = express.Router();
router

    .get('/', (req, res)=> {
        db.findOne((err, result)=> {
            if (err)
                res.json({err: 1, msg: err});
            else
                res.json({err: 0, data: result});
        })
    });

export = router;