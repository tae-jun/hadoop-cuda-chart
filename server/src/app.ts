import express = require('express');
import async = require('async');
var http = require('http');
import path = require('path');
var favicon = require('serve-favicon');
var logger:any = require('morgan');
var bodyParser:any = require('body-parser');

import socketIO = require('socket.io');

global.config = require('./config');
var config = global.config.web;

export var app:express.Application = express();
var server = http.createServer(app);
export var io:SocketIO.Server = socketIO(server);

// Set environments
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set routes
app.use('/', require('./route/index'));

// Start web & socket.io server
server.listen(config.port, ()=> {
    console.log('+++ Web & Socket.io is listening on port %d', config.port);

    // Socket.io route
    require('./historyApi/main');
});