/// <reference path="../../scripts/_references.d.ts"/>

import socketIOClient = require('socket.io-client');

export function send(data, callback?:Function) {
    console.log('=== Connecting...');
    var socket = socketIOClient('http://localhost');
    socket.on('connect', ()=> {
        console.log('+++ Socket.io connected');
        // Send data
        socket.emit('log', data);
        // Return data from server
        socket.on('done', ()=>{
            console.log('+++ Data sent to server');
            if (callback)
                callback();
        });
    });

    socket.on('error', (err)=> {
        console.log('--- Socket connection error');
        console.log(err);
    });
}