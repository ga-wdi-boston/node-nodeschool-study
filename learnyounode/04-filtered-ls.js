// Create program that prints list of files from specified directory, filtered by file type
// Will be provided (directory name, file type)
// If given ('/pathname', 'txt'), then need to filter dir-list to only files that end with .txt.
// List of files should be printed to console, one file per line. Must use async

var fs = require('fs');
var path = require('path')

// Async readdir, Reads contents of directory.
// list is an array of filename strings
fs.readdir(process.argv[2], function callback (err, list) {
  function checkType (value) {
     if (path.extname(value) === '.' + process.argv[3]) {
      return true;
     }
  };
  var filteredArray = list.filter(checkType);
  for (var i = 0; i < filteredArray.length; i++) {
    console.log(filteredArray[i]);
  }
});


// pathname = process.argv[2] directory name as first argument to your program
// type = process.argv[3] file extension to filter by as second argument

// arr.filter(callback[, thisArg])
// path.extname('index.html') // returns '.html'


// var fs = require('fs');
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.filter(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })
