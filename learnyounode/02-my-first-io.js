'use strict';
let fs = require('fs');
let fileString = fs.readFileSync(process.argv[2], 'utf8');
let fileArray = fileString.split('\n');
console.log(fileArray.length-1);
