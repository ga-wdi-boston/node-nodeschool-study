'use strict';

var fs = require('fs');

let filePath = process.argv[1];

let buffer = fs.readFileSync(filePath);

let fileText = buffer.toString();

let newLines = fileText.split('\n').length;

console.log(newLines);
