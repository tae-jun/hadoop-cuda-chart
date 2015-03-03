import http = require('http');
import socketIOClient = require('socket.io-client');
import configAll = require('../config');
import config = configAll.socket;

console.log('=== Connecting...');
var socket = socketIOClient('http://' + config.webHost);

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

    // Send request to map reduce job history server
    http.get('http://node01:19888' + data.get, function (res) {
        var body = '';
        res.on('data', function (chunk) {
            body += chunk;
        });
        res.on('end', function () {
            console.log(body);

            socket.emit('api', {data: body});
        });
    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });
});