import db = require('../mongo/hcc/hdLog/main');

var io:SocketIO.Server = require('../app').io;

// On socket.io connected
io.on('connection', (socket)=> {
    console.log('+++ New incoming socket.io connection');

    socket.emit('api', {get: '/ws/v1/history'});

    // Get log data from client
    socket.on('api', (data)=> {
        console.log('+++ On "api"');
        console.log(data);
    });
});

