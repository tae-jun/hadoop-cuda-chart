var io:SocketIO.Server = require('../app').io;

var socket:SocketIO.Socket;

// On socket.io connected
io.on('connection', (_socket)=> {
    console.log('+++ New incoming socket.io connection');
    socket = _socket;

    socket.on('error', (err)=> {
        console.error('--- Socket connection error');
        console.error(err);
        socket = null;
    });

    socket.on('disconnect', ()=> {
        console.log('=== Socket disconnected');
        socket = null;
    });


    /**
     * TODO:
     * DELETE HERE
     */
    request('/ws/v1/history', (err, data)=> {
        console.log('+++ Got history info');
        console.log(data);
    });
});

/**
 *
 * @param url example: /ws/v1/history
 * @param callback
 */
export function request(url:string, callback:(err, data)=>void) {
    if (socket == null)
        return callback(new Error('Socket is closed'), null);
    var start = new Date().getTime();

    socket.emit('api', url, (data)=> {
        callback(null, data);
        var end = new Date().getTime();
        console.log('+++ History API %s - %dms', url, (end - start));
    });
}