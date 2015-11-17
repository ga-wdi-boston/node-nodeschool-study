'use strict'

var fs = require('fs');

var filename = process.argv[2];
var buffer = fs.readFileSync(filename);
var string = buffer.toString();
var count = string.split('\n').length;

console.log(count - 1);

