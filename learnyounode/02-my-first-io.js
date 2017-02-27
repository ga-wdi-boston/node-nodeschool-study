const fs = require('fs');
let file = process.argv[2];


if (!file) console.log('The file name should be entered as a parameter');

let buffer = fs.readFileSync(file);
let lines = buffer.toString().split("\n");

console.log(buffer.toString().split("\n").length - 1);
