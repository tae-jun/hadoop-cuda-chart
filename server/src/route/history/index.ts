import express = require('express');
import api = require('../../historyApi/main');
import Form = require('../ResForm');

var router = express.Router();
router

    .get('/mapreduce/jobs/:jobId/tasks', (req, res, next)=> {
        var jobId = req.params.jobId;
        api.requestTasks(jobId, (err, data)=> {
            if (err)
                console.error(err);

            console.log(data);

            res.json(new Form(err, data));
        });
    })

    .all('/*', (req, res, next)=> {
        api.request('/ws/v1/history/' + req.params[0], (err, data)=> {
            if (err)
                console.error(err);

            res.json(new Form(err, data));
        });
    });

export = router;