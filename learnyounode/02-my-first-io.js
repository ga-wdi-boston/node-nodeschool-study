'use strict';

let fs = require('fs');

let buffer = fs.readFileSync(process.argv[2]);
let string = buffer.toString();
let array = string.split('\n');
let count = array.length;
console.log(count - 1);
