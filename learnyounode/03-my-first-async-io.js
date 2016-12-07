var fs = require('fs');
var input = process.argv[2];
var str = fs.readFile(input).toString();
var lineCount = str.split("\n").length;
console.log(lineCount - 1);
