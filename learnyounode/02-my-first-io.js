'use strict';

var fs = require('fs');

let buf = fs.readFileSync(process.argv[2]);

let str = buf.toString();

let arr = str.split('\n');

console.log(arr.length -1);
