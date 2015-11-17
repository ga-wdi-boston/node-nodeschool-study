
var fs = require('fs');

var content = fs.readFileSync(process.argv[2], 'utf-8');
var lines = content.split('\n');
var lineCount = 0;

for (var i = 0; i < lines.length-1; i++) {
  lineCount++;
}

console.log(lineCount);
