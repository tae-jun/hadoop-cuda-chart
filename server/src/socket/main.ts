import db = require('../mongo/hcc/hdLog/main');

var io:SocketIO.Server = require('../app').io;

// On socket.io connected
io.on('connection', (socket)=> {
    console.log('+++ New incoming socket.io connection');

    socket.emit('api', '/ws/v1/history', (data)=> {
        console.log(data);
    });
});

