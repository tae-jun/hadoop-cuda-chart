/// <reference path="../scripts/_references.d.ts"/>

import fs = require('fs');

var fd = '/Users/jun/hadoopOut/';
var files = fs.readdirSync(fd);

files = files.filter((value, index, arr)=> {
    if (/^part/.test(value))
        return true;
    else
        return false;
});

//console.log(files);

files.forEach((file)=> {
    //console.log(fs.readFileSync(fd + file, {encoding: 'ASCII'}));
});

var file = files[0];

var content:string = fs.readFileSync(fd + file, {encoding: 'ASCII'});
console.log(content);

var logs = content.split('\n');
console.log(logs);

var testLog = logs[0];
var se = testLog.split(':');
console.log(se);


var startMilli = Number(se[0]);
var endMilli = Number(se[1]);

se.forEach((value:any)=> {
    value = value.trim();
    console.log(typeof value);
    value = Number(value);
    console.log(typeof value);
    console.log(value);
});
/*

 console.log('ex) %d', new Date().getTime());

 var milli = 416142119.546;
 console.log('raw number: %d', milli);
 milli *= 1000;
 console.log('x1000: %d', milli);

 milli += Math.pow(10, 12);
 console.log('+10^12: %d', milli);

 console.log(new Date(milli).toLocaleString());
 */
var diff = endMilli - startMilli;
console.log(diff);
var sec = diff / 1000;
console.log(sec);
var min = sec / 60;
console.log(min);

var fixedMilli = Math.round(diff);
console.log(fixedMilli);
