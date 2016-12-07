// Write a program that uses a single asynchronous filesystem operation to
//  read a file and print the number of newlines it contains to the console
//  (stdout), similar to running cat file | wc -l.
//
//  The full path to the file to read will be provided as the first
//  command-line argument.



// this is the same as previous one but we are using callback
var fs = require('fs');


var newFile = fs.readFile(process.argv[2], function(err, data){

  var lines = data.toString().split('\n').length;

  console.log(--lines);
});


// ~/wdi/study/node-nodeschool-study (study)$ learnyounode run learnyounode/03-my-first-async-io.js
// 20
