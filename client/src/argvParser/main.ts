// Get default config
var config:any = global.config;
// Get options
var argv:Object = require('minimist')(process.argv.slice(2));
// Check options
var keys = Object.keys(argv);
keys.forEach((key)=> {
    var val = argv[key];

    switch (key) {
        case'_':
            break;
        case'h':
        case'host':
            config.socket.host = val;
            break;
        case'p':
        case'port':
            config.socket.port = val;
            break;
        case'hHost':
            config.historyApi.host = val;
            break;
        case'hPort':
            config.historyApi.port = val;
            break;
        default:
            console.log('--- Invalid option "%s"', key);
            process.exit(1);
            break;
    }
});