'use strict'

var fs = require('fs');
var path = process.argv[2];
var contents = fs.readFileSync(path);
var humanR = contents.toString();
var arrayContent = humanR.split('\n');
var length = arrayContent.length;
console.log(length - 1);
