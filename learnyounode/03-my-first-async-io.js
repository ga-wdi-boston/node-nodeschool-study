'use strict';


let fs = require('fs');
let filename = process.argv[2];

let file = fs.readFile(filename);

let contents = file.toString();

console.log(contents.split('\n').length - 1);
