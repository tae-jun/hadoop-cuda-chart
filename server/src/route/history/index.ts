import express = require('express');
import api = require('../../historyApi/main');
import Form = require('../ResForm');

var router = express.Router();
router

    .all('/*', (req, res, next)=> {
        api.request('/ws/v1/history/' + req.params[0], (err, data)=> {
            if (err)
                console.error(err);
            console.log(typeof data);
            console.log(data);
            res.json(new Form(err, data));
        });
    });

export = router;