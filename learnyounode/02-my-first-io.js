'use strict';

let fs = require('fs');
let file = process.argv[2];
let buf = fs.readFileSync(file);
let str = buf.toString();
let newStr = str.split('\n');
console.log(newStr.length-1);
