var fs = require('fs');

var fileContents = fs.readFileSync(process.argv[2]).toString();
var newLines = fileContents.split('\n').length - 1;

console.log(newLines);
