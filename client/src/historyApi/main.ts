import http = require('http');
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
