import mongodb = require('mongodb');
import MongoClient = mongodb.MongoClient;

import configAll = require('../../config');
import config = configAll.mongo;

export var db: mongodb.Db;

export function connect(callback: (err) => void) {
    MongoClient.connect('mongodb://localhost:' + config.port + '/' + config.hccDbName, (err, _db) => {
        db = _db;

        console.log('+++ Database "%s" is ready', config.hccDbName);

        callback(err);
    });
}
