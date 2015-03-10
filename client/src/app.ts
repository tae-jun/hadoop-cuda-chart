// Load default options
global.config = require('./config');

// Set user defined options
require('./argvParser/main');
console.log('=== App config');
console.log(global.config);

import async = require('async');

// Start Socket.IO Client
import socket = require('./socket/main');
import api = require('./historyApi/main');

socket.onApiRequest((url, fn)=> {
    console.log('+++ Incoming "api" request - %s', url);
    var start = new Date().getTime();
    // Request to history server
    api.get(url, (res)=> {
        console.log(res);
        // Send response
        fn(res);
        var end = new Date().getTime();
        console.log('+++ GET %s - %dms', url, (end - start));
    });
});

socket.onTasks((jobId, fn)=> {
    console.log('+++ Incoming "tasks" request - %s', jobId);
    var start = new Date().getTime();

    api.getTasks(jobId, (err, nodeTasks)=> {
        console.log(nodeTasks);
        // Send response
        fn(JSON.stringify(nodeTasks));
        var end = new Date().getTime();
        console.log('+++ GET TASKS %s - %dms', jobId, (end - start));
    });
});