'use strict';

// Write a program that uses a single asynchronous filesystem operation to
// read a file and print the number of newlines it contains to the console
// (stdout), similar to running cat file | wc -l.

// load the fs module from the Node core library
var fs = require('fs');

// path to file is stored in process.argv[2]
// specifying utf8 converts it to text instead of Buffer
// run error check on file.  If there's no error, split on new lines, count
// elements in the array - 1 (no new line on last line)
fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.split(/\r?\n/).length-1);
});
