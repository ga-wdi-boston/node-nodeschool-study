'use strict'

let fs = require('fs');

let buf = fs.readFileSync(process.argv[2]).toString().split('\n');

console.log(buf.length-1);
