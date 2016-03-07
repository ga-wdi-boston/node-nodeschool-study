'use strict';

let fs = require('fs');


let buf = fs.readFileSync(process.argv[2]);
let newlines = buf.toString();
console.log(newlines.split('\n').length - 1);
