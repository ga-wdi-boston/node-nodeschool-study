'use strict';

let fs = require('fs');

let filePath = process.argv[2];

let buf = fs.readFileSync(filePath);

let numLines = buf.toString().split('\n').length - 1;

console.log(numLines);
