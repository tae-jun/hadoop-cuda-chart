import http = require('http');
import async = require('async');
var config:any = global.config.historyApi;

export function get(reqString:string, callback:(res)=>void) {
    if (reqString[0] != '/')
        reqString = '/' + reqString;

    // Send request to map reduce job history server
    http.get('http://' + config.host + ':' + config.port + reqString, (res) => {
        var body = '';

        res.on('data', (chunk) => {
            body += chunk;
        });

        res.on('end', ()=> {
            callback(body);
        });
    })
        .on('error', (e) => {
            console.error('--- HTTP action error');
            console.error(e);
        });
}

export function getTasks(jobId:string, callback:(err, nodeTasks)=>void) {
    var nodeTasks = {};

    async.waterfall([
            // List tasks
            function (cb) {
                http.get('http://' + config.host + ':' + config.port
                    + '/ws/v1/history/mapreduce/jobs/' + jobId + '/tasks',
                    (res)=> {
                        var body:any = '';

                        res.on('data', (chunk)=> {
                            body += chunk;
                        });

                        res.on('end', ()=> {
                            body = JSON.parse(body);

                            var tasks = body.tasks.task;
                            cb(null, tasks);
                        });
                    });
            },
            // Get task attempts for each tasks
            function (tasks, cb) {
                var parFns = [];

                tasks.forEach((task)=> {
                    var taskId = task.id;

                    parFns.push((parCb)=> {
                        http.get('http://' + config.host + ':' + config.port
                            + '/ws/v1/history/mapreduce/jobs/' + jobId + '/tasks/'
                            + taskId + '/attempts',
                            (res)=> {
                                var body:any = '';

                                res.on('data', (chunk)=> {
                                    body += chunk;
                                });

                                res.on('end', ()=> {
                                    body = JSON.parse(body);

                                    var taskAttempt = body.taskAttempts.taskAttempt[0];
                                    parCb(null, taskAttempt);
                                });
                            });
                    });
                });

                async.parallel(parFns, (err, taskAttempts)=> {
                    cb(err, taskAttempts);
                });
            },
            function (taskAttempts, cb) {
                console.log(taskAttempts);
                taskAttempts.forEach((taskAttempt:any)=> {
                    if (nodeTasks[taskAttempt.nodeHttpAddress] == undefined)
                        nodeTasks[taskAttempt.nodeHttpAddress] = [];

                    nodeTasks[taskAttempt.nodeHttpAddress].push(taskAttempt);
                });

                cb(null, nodeTasks);
            }
        ],
        function (err, result) {
            if (err)
                return callback(err, err.message);

            callback(null, nodeTasks);
        });
}