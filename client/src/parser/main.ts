/// <reference path="../../scripts/_references.d.ts"/>

import fs = require('fs');

import configAll = require('../config');
import config = configAll.parser;

export function parse():any {

    var fileDir = config.hadoopOutPath;
    // Read directory file names
    var fileNames = fs.readdirSync(fileDir);
    // Filter name like "part*"
    fileNames = fileNames.filter((value, index, arr)=> {
        if (/^part/.test(value))
            return true;
        else
            return false;
    });

    var mappers = [];
    fileNames.forEach((fileName, index)=> {
        // Read file
        var file = fs.readFileSync(fileDir + fileName, {encoding: 'ASCII'});

        console.log('[%d]', index);

        var logs:any[] = file.split('\t\n');

        var starts:number[] = [];
        var ends = [];

        logs.forEach((log, index)=> {
            var start:number = Number(log.split(':')[0]);
            var end:number = Number(log.split(':')[1]);

            // Last log is invalid log data
            if (Number(start) == 0 || Number(end) == NaN)
                logs.splice(index, 1);
            else {
                starts.push(start);
                ends.push(end);

                logs[index] = {
                    start: start,
                    end: end,
                    take: Math.round(end - start)
                };

                console.log('start: %d\tend: %d\ttakes: %dms', start, end, (end - start).toFixed(0));
            }
        });

        var startMin = Math.min.apply(null, starts);
        var endMax = Math.max.apply(null, ends);
        console.log('# Result');
        console.log('Start: %d\tEnd: %d\tTotal: %sms\n', startMin, endMax, (endMax - startMin).toFixed(0));

        var mapper = {
            start: startMin,
            end: endMax,
            take: Math.round(endMax - startMin),
            logs: logs
        };

        mappers.push(mapper);
    });

    var data = {
        date: new Date(),
        mappers: mappers
    };

    return data;
}