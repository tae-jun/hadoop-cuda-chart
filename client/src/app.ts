/// <reference path="../scripts/_references.d.ts"/>

// Set options
import argvParser = require('./argvParser/main');
argvParser.parse();

import config = require('./config');

console.log('### Application will be started with next options');
console.log('hadoop out path: %s', config.parser.hadoopOutPath);

// App starts

import parser = require('./parser/main');
import socket = require('./socket/main');

// Parse hadoop out files
var data = parser.parse();

console.log(data);
console.log(data.mappers.length);

socket.send(data, ()=> {
    console.log('+++ Exit application');
    process.exit(0);
});