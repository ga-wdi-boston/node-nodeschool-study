 // ## FILTERED LS (Exercise 5 of 13)

 //  Create a program that prints a list of files in a given directory,
 //  filtered by the extension of the files. You will be provided a directory
 //  name as the first argument to your program (e.g. '/path/to/dir/') and a
 //  file extension to filter by as the second argument.

 //  For example, if you get 'txt' as the second argument then you will need to
 //  filter the list to only files that end with .txt. Note that the second
 //  argument will not come prefixed with a '.'


var fs = require('fs');
var path = require('path');
var file = fs.readdir(process.argv[2], function (err, list) {
  if (!err) {
    list.forEach( function(file, i) {
      if(path.extname(file) === '.' + process.argv[3]) {
        console.log(file);
      }
    });
  }
});

// Use “readdir” to get the list of files in a given directory and walk through each file and find its file type with file extension using the “path” module.
