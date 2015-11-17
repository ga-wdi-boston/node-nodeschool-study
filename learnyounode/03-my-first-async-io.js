var fs = require('fs');
var input = process.argv[2];

// Get text from a file. Takes a file path and a callback as arguments
var getText = function getText(file, callback) {
  fs.readFile(file, callback);
};

// Callback to do stuff with the returned data
var countLines = function countLines(error, data) {
  var text = data.toString();
  var lines = text.split('\n');
  var count = lines.length - 1;
  console.log(count);
};

getText(input, countLines);
