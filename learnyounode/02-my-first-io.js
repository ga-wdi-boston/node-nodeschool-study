'use strict';

let fs = require('fs');

let buffer = fs.readFileSync(process.argv[2]);

let bufferNUm = buffer.toString().split('\n').length - 1;

console.log(bufferNUm);
