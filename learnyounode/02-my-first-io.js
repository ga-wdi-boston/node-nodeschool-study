var fs = require('fs'); // call filesystem operation [fs module]

var buffer = fs.readFileSync(process.argv[2]); //readfile that return a buffer object
var str = buffer.toString();
var lines = str.split('\n');

console.log(lines.length - 1);
