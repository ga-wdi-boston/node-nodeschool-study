 // ## MY FIRST ASYNC I/O! (Exercise 4 of 13)

 //  Write a program that uses a single asynchronous filesystem operation to
 //  read a file and print the number of newlines it contains to the console
 //  (stdout), similar to running cat file | wc -l.

 //  The full path to the file to read will be provided as the first
 //  command-line argument.


var fs = require('fs');

var file = fs.readFile(process.argv[2], function(err, data){
  if (!err) {
    console.log(data.toString().split('\n').length - 1);
  }
});


//Here use the same “fs” module to read the file but this time with “readFile” method to read the file asynchronously. Since the file fetch happens asynchronously, we cannot expect the content of the file in the next line. Use callback to get it
