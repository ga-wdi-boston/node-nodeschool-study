var fs = require('fs');
var fileName = process.argv[2];
var bufFile = fs.readFileSync(fileName);
var strFile = bufFile.toString();
var count = strFile.split('\n');
console.log(count.length - 1);
