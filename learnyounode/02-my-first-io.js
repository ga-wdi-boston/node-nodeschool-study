'use strict';

let fs = require('fs');

let readSync = fs.readFileSync(process.argv[2]).toString();

let splitString = readSync.split('\n');

console.log(splitString.length - 1);
