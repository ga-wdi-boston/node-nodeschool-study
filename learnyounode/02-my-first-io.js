// Write a program that uses a single synchronous filesystem operation to
// read a file and print the number of newlines (\n) it contains to the
// console (stdout), similar to running cat file | wc -l.
//
// The full path to the file to read will be provided as the first
// command-line argument (i.e., process.argv[2]). You do not need to make
// your own test file.



// to read file include module fs
var fs = require('fs');


// perform synchronous read of file fileFileSync of fs object and pass pass absolute path name and it will return content of file that will put in buffer, and convert buffer to string, split string and pass delimer that will be new line
// \n split in new line
// process.argv[2] all arguments we pass
 var newFile = fs.readFileSync(process.argv[2]).toString().split('\n').length;


 // Note that the test file does not have a newline character ('\n') at the end of the last line, so using this method you'll end up with an array that has one more element than the number of newlines.  

console.log(--newFile);


// example from terminal, passed 01-baby-steps.js as an arguments
// ~/wdi/study/node-nodeschool-study (study)$ cat learnyounode/01-baby-steps.js
              // 'use strict';
              //
              // // console.log(process.argv);
              //
              // // console.log(Number(process.argv[2]) + Number(process.argv[3]) + Number(process.argv[4]));
              //
              // // input, 6 numbers
              // // node learnyounode/01-baby-steps.js 1 2 3 4 5 6 7 8 9 10
              //
              // let result = 0;
              //      // starts at 3rd element because first is node and second is path
              //      for (let i = 2; i < process.argv.length; i++)
              //        result += Number(process.argv[i]);
              //
              //      console.log(result);
// ~/wdi/study/node-nodeschool-study (study)$ node learnyounode/02-my-first-io.js learnyounode/01-baby-steps.js
// 15
