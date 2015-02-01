import hcc = require('./hcc/main');

export function connect(callback:(err)=>void) {
    hcc.connect((err)=> {
        callback(err);
    })
}