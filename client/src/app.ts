// Load default options
global.config = require('./config');

// Set user defined options
require('./argvParser/main');
console.log('=== App config');
console.log(global.config);

// Start Socket.IO Client
require('./socket/main');

