import express = require('express');
import async = require('async');
var http = require('http');
import path = require('path');
var favicon = require('serve-favicon');
var logger:any = require('morgan');
var bodyParser:any = require('body-parser');

import config = require('./config');
import mongo = require('./mongo/main');

export var app:express.Application = express();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

async.series([
        // Start mongodb
        function (callback) {
            mongo.connect((err)=> {
                callback(err);
            });
        }
    ],
    (err, results)=> {
        if (err)
            return console.log(err);

        // Set routes
        app.use('/', require('./route/index'));

        // Start web & socket.io server
        app.listen(config.web.port, ()=> {
            console.log('+++ Web app server is now listening on port %d', config.web.port);
        });
    });
