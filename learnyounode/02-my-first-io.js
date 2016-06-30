'use strict';
var fs = require('fs');
let buf = fs.readFileSync(process.argv[2]);
let full = buf.toString();
let pieces = full.split('\n');
console.log((pieces.length) - 1);
