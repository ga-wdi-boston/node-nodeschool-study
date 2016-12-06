'use strict';
// Write a program that uses a single synchronous filesystem operation to
// read a file and print the number of newlines (\n) it contains to the
// console (stdout), similar to running cat file | wc -l.

// process.argv[2] - contains full path of file to read

// load the fs module from the Node core library
var fs = require('fs');

// This method will return a Buffer object containing the complete contents of the file.
// convert the Buffer object to a string
let myBufferString = fs.readFileSync(process.argv[2]).toString();

// split the string into an array with new lines as the delimeter
// there's no /n character at the last line so total new line charactars is equal to
// the length of the array - 1
console.log(myBufferString.split(/\r?\n/).length-1);
