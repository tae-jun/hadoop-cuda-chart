/// <reference path="../../scripts/_references.d.ts" />
import path = require('path');
import config = require('../config');

export function parse() {
    var argvs = process.argv;

    for (var i = 2; i < argvs.length; i++) {
        var argv = argvs[i];

        //console.log('%d: %s', i, argv);

        switch (argv) {
            case '-p':
            case '--path':
                i++;
                config.parser.hadoopOutPath = path.resolve(argvs[i]) || config.parser.hadoopOutPath;
                break;
        }
    }
}