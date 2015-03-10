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
        console.log('--- Socket disconnected');
        socket = null;
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
    // Request to client on network with hadoop history server
    socket.emit('api', url, (dataStr)=> {
        var data = JSON.parse(dataStr);
        callback(null, data);
        var end = new Date().getTime();
        console.log('+++ History API %s - %dms', url, (end - start));
    });
}

export function requestTasks(jobId:string, callback:(err, data)=>void) {
    if (socket == null)
        return callback(new Error('Socket is closed'), null);

    var start = new Date().getTime();
    // Request to client on network with hadoop history server
    socket.emit('tasks', jobId, (dataStr)=> {
        var data = JSON.parse(dataStr);
        callback(null, data);
        var end = new Date().getTime();
        console.log('+++ History API TASKS %s - %dms', jobId, (end - start));
    });
}