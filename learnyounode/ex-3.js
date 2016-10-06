'use strict';

// require fs module to perform filesystem operation
let fs = require('fs');
// define file as supplied file and use readFileSync to read through file
let file = fs.readFileSync(process.argv[2]);
// define lines as file as a string split on each new line
let lines = file.toString().split('\n').length - 1;


console.log(lines);
