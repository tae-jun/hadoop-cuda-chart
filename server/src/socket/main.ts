import db = require('../mongo/hcc/hdLog/main');

var io:SocketIO.Server = require('../app').io;

// On socket.io connected
io.on('connection', (socket)=> {
    console.log('+++ New incoming socket.io connection');
    // Get log data from client
    socket.on('log', (data)=> {
        console.log('+++ On "log"');

        data._id = new Date(data.date);
        delete data.date;

        // Insert log into mongodb
        db.insert(data, (err, result)=> {
            if (err)
                return console.log(err);

            // Response
            socket.emit('done');
        });
    });
});