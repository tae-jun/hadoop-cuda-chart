import mongodb = require('mongodb');
import Db = mongodb.Db;
import Collection = mongodb.Collection;

import hcc  = require('../main');

var db:Db;
var coll:Collection;
var queue:Function[] = [];

db = hcc.db;
coll = db.collection('hdLog');
console.log('+++ Collection "hdLog" ready');

export function insert(data, callback?:(err, result)=>void) {
    coll.insert(data, (err, result)=> {
        if (err)
            console.log(err);
        else
            console.log('+++ Hadoop cuda log inserted');

        if (callback)
            callback(err, result);
    });
}

export function findOne(callback?:(err, hdlog)=>void) {
    coll.findOne((err, doc)=> {
        callback(err, doc);
    });
}