/*
Write a program that uses a single asynchronous filesystem operation to
 read a file and print the number of newlines it contains to the console
 (stdout), similar to running cat file | wc -l.

 The full path to the file to read will be provided as the first
 command-line argument
*/

var fs = require('fs');
var file_path = process.argv[2];

fs.readFile(file_path, function (err, data) {
  if (err) {
    return console.log(err);
  }

  var data_sb = data.toString();
  var new_lines = data_sb.split('\n');
  var new_lines_count = new_lines.length - 1;
  console.log(new_lines_count);

});
