// # LEARN YOU THE NODE.JS FOR MUCH WIN!

//  ## MY FIRST I/O! (Exercise 3 of 13)

//   Write a program that uses a single synchronous filesystem operation to
//   read a file and print the number of newlines (\n) it contains to the
//   console (stdout), similar to running cat file | wc -l.

//   The full path to the file to read will be provided as the first
//   command-line argument (i.e., process.argv[2]). You do not need to make
//   your own test file.


var fs = require('fs')  // fs stands for file system that comes from the node core library
var file = fs.readFileSync(process.argv[2]); //'process.argv[2]' gives us the name of the file to read because the first two arguments to argv is occupied by path to node and the program file.
console.log(file.toString().split('\n').length - 1); //counts the number of new lines in the file, converts object to string, and splits into array with newline character and counts the words.
