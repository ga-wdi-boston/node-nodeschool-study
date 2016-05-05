'use strict';

const fs = require('fs');

let fileStr = fs.readFileSync(process.argv[2]).toString();

console.log(fileStr.split('\n').length - 1);
