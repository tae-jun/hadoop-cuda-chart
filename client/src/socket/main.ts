import http = require('http');
import socketIOClient = require('socket.io-client');
import api = require('../historyApi/main');
var config:any = global.config.socket;

console.log('=== Connecting...');
var socket = socketIOClient('http://' + config.host + ':' + config.port);

socket.on('connect', ()=> {
    console.log('+++ Socket.io connected');
});

socket.on('error', (err)=> {
    console.error('--- Socket connection error');
    console.error(err);
});

socket.on('api', (data)=> {
    console.log('+++ API request');
    console.log(data);

    api.get(data, (res)=> {
        console.log(res);
    });
});