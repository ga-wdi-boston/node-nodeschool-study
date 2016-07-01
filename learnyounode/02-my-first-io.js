// full path to file process.argv[2]
// To read a file, you'll need to use fs.readFileSync('/path/to/file')
// This will return a buffer object
// Converted to strings by simply calling the toString() method
// A JavaScript String can be .split() into an array of  
//   substrings and that '\n' can be used as a delimiter

var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);

var lines = contents.toString().split('\n').length - 1;

console.log(lines);
