var fs = require('fs');

var inFileContents = fs.readFileSync(process.argv[2]);
var lineArray = inFileContents.toString().split("\n");
console.log(lineArray.length - 1);
