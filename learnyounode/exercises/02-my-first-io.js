'use strict'

let fs = require('fs');

let buf = fs.readFileSync(process.argv[2]).toString().split('\n').length-1;

console.log(buf);
