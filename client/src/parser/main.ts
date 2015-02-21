/// <reference path="../../scripts/_references.d.ts"/>

import fs = require('fs');

import configAll = require('../config');
import config = configAll.parser;

export function parse(): any {

    var fileDir = config.hadoopOutPath;
    // Read directory file names
    var fileNames = fs.readdirSync(fileDir);
    // Filter name like "part*"
    fileNames = fileNames.filter((value, index, arr) => {
        if (/^part/.test(value))
            return true;
        else
            return false;
    });

    var timeMin: number = 9007199254740992;   // biggest number in javascript

    var mappers = [];
    fileNames.forEach((fileName, index) => {
        // Read file
        var file = fs.readFileSync(fileDir + fileName, { encoding: 'ASCII' });

        console.log('[%d]', index);

        var logs: any[] = file.split('\t\n');

        var starts: number[] = [];
        var ends: number[] = [];

        logs.forEach((log, index) => {
            var start: number = Number(log.split(':')[0]);
            var end: number = Number(log.split(':')[1]);

            // Last log is invalid log data
            if (Number(start) == 0 || Number(end) == NaN)
                logs.splice(index, 1);
            else {
                starts.push(Number(start.toFixed(0)));
                ends.push(Number(end.toFixed(0)));

                logs[index] = {
                    start: Number(start.toFixed(0)),
                    end: Number(end.toFixed(0)),
                    take: Math.round(end - start)
                };

                console.log('start: %d\tend: %d\ttakes: %dms', start, end,(end - start).toFixed(0));
            }
        });

        var startMin = Math.min.apply(null, starts);
        var endMax = Math.max.apply(null, ends);
        console.log('# Result');
        console.log('Start: %d\tEnd: %d\tTotal: %sms\n', startMin, endMax,(endMax - startMin).toFixed(0));

        timeMin = Math.min(timeMin, startMin);

        var mapper = {
            start: startMin,
            end: endMax,
            take: Math.round(endMax - startMin),
            logs: logs
        };

        mappers.push(mapper);
    });

    mappers.forEach((mapper) => {
        mapper.start = mapper.start - timeMin;
        mapper.end = mapper.end - timeMin;
        mapper.logs.forEach((log) => {
            log.start = log.start - timeMin;
            log.end = log.end - timeMin;
        });
    });

    var data = {
        date: new Date(),
        mappers: mappers
    };

    return data;
}
