import http = require('http');
import socketIOClient = require('socket.io-client');
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

export function onApiRequest(listener:(url, fn)=>void) {
    socket.on('api', listener);
}
