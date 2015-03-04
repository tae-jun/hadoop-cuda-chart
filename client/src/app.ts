// Load default options
global.config = require('./config');

// Set user defined options
require('./argvParser/main');
console.log('=== App config');
console.log(global.config);

// Start Socket.IO Client
import socket = require('./socket/main');
import api = require('./historyApi/main');

socket.onApiRequest((url, fn)=> {
    console.log('+++ Incoming API request - %s', url);
    var start = new Date().getTime();
    // Request to history server
    api.get(url, (res)=> {
        console.log(res);
        // Send response
        fn(res);
        var end = new Date().getTime;
        console.log('+++ GET %s - %d', url, (end - start));
    });
});
