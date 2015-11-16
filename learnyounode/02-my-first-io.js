var fs = require('fs'); //require file system module
//from node library

// var buffer = fs.readFileSync(process.argv[2]);

// var string = buffer.toString();

// var file = string.split('\n');

// console.log(file.length - 1);

var buffer = fs.readFileSync(process.argv[2]);

var lines = buffer.toString().split('\n');

console.log(lines.length - 1);
