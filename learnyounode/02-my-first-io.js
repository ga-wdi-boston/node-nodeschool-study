// Include the 'filesytem' node library
var fs = require('fs');
var input = process.argv[2];

// Function that takes a file path as input, and returns the number of lines in a document.
var countLines = function countLines(file) {
  var text = fs.readFileSync(file).toString();
  var lines = text.split('\n');
  return lines.length - 1;
};

count = countLines(input);
console.log(count);
