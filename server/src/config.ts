import path = require('path');

module config {
    export var web = {
        port: 80
    };

    export var socket = {};

    export var mongo = {
        port: 27017,
        hccDbName: 'hcc'
    };

    export var route = {
        bowerDir: path.resolve(__dirname, '../../web/bower_components'),
        distDir: path.resolve(__dirname, '../../web/dist'),
        imgDir: path.resolve(__dirname, '../../web/img')
    };
}

export = config;
