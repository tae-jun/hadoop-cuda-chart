import http = require('http');
import socketIOClient = require('socket.io-client');
import api = require('../historyApi/main');
var config:any = global.config.socket;

var socket = socketIOClient('http://' + config.host + ':' + config.port);
console.log('=== Connecting...');

socket.on('connect', ()=> {
    console.log('+++ Socket.io connected');
});

socket.on('error', (err)=> {
    console.error('--- Socket connection error');
    console.error(err);
});

socket.on('api', (url, fn)=> {
    console.log('+++ API request');
    console.log('url: %s', url);

    api.get(url, (res)=> {
        console.log(res);
        fn(res);
    });
});