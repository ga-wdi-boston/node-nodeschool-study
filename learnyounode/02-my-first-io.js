var fs = require('fs');
var filename = process.argv[2];
var buffer = fs.readFileSync(filename);
var stringBuff = buffer.toString();
var splitted = stringBuff.split('\n')

console.log(splitted.length-1);
