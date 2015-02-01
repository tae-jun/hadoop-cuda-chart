module config {
    export var web = {
        port: 80
    };

    export var socket = {};

    export var mongo = {
        port: 27017,
        hccDbName: 'hcc'
    };
}

export = config;