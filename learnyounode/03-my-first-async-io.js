


// Write a program that uses a single asynchronous filesystem operation to
// read a file and print the number of newlines it contains to the console
// (stdout), similar to running cat file | wc -l.
//
// The full path to the file to read will be provided as the first
// command-line argument.

var fs = require('fs')

var contents = undefined;

function lines(callback) {
  fs.readFile(process.argv[2], function lineNumber(err, contents) {
    if (err) throw err;
    console.log(data.split(/\r?\n/).length-1);
  })
};

function countLines() {
  console.log(contents);
};

lines(countLines);
