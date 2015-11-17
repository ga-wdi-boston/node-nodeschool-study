// write program that use synchcronous to read a file
// and print the number of newlines
 var fs = require('fs')

 // to read a file, uses fs.readFileSync() => return object
 // that contain complete contents of the file

 var contents = fs.readFileSync(process.argv[2]).toString().split('\n').length;

console.log(contents-1);


