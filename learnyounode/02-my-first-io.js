/*
Write a program that uses a single synchronous filesystem operation to
 read a file and print the number of newlines (\n) it contains to the
 console (stdout), similar to running cat file | wc -l.

 The full path to the file to read will be provided as the first
 command-line argument (i.e., process.argv[2]). You do not need to make
 your own test file.
*/

var fs = require('fs');
var file_path = process.argv[2];
var file_content = fs.readFileSync(file_path);
var file_content_sb = file_content.toString();
var new_lines = file_content_sb.split('\n');
var new_lines_count = new_lines.length - 1;
console.log(new_lines_count);
