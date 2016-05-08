'use strict';

let fs = require('fs');

let text = fs.readFile(process.argv[2]);
text = text.toString().split('\n');
console.log(text.length - 1);
