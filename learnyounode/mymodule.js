'use strict';

// Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You must use asynchronous I/O.  Write a module file to do most of the work.
// module.exports = function (pathname, type, callback) { };

module.exports = function (pathname, type, callback) {
  var fs = require('fs');
  var path = require('path');

  fs.readdir(pathname, function (err, list) {
    if (err)
      return callback (err)

    var filteredArray = list.filter(function (value) {
      if (path.extname(value) === '.' + type) {
        return true;
      }
    });

    for (var i = 0; i < filteredArray.length; i++) {
      console.log(filteredArray[i]);
    }

    callback (null, filteredArray)
  })  // end of fs.readdir
};  // end of module.exports


// pathname = process.argv[2] directory name as first argument to your program
// type = process.argv[3] file extension to filter by as second argument
