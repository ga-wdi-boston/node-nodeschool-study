var fs = require('fs');

var filePath = process.argv[2];

var fileBuffer = fs.readFileSync(filePath);

var fileString = fileBuffer.toString();

var fileLineArray = fileString.split('\n');

var lineCount = fileLineArray.length - 1;

console.log(lineCount);
