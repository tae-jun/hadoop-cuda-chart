import express = require('express');
import async = require('async');
var http = require('http');
import path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

import socketIO = require('socket.io');

import config = require('./config');
import mongo = require('./mongo/main');

export var app:express.Application = express();
var server = http.createServer(app);
export var io:SocketIO.Server = socketIO(server);

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

        // Start web & socket.io server
        server.listen(config.web.port, ()=> {
            console.log('+++ Web & Socket.io is listening on port %d', config.web.port);

            // Socket.io route
            require('./socket/main');
        });
    });
