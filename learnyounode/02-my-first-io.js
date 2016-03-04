var fs = require('fs');
var file = process.argv[2];
var buffer = fs.readFileSync(file);
var str = buffer.toString();
var splitStr = str.split("\n");
console.log(splitStr.length-1);
