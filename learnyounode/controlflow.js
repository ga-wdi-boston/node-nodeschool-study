var fs = require('fs');

fs.readdir(".", function (err, files) {
  var count = files.length,
      results = {};
  files.forEach(function (filename) {
    fs.readFile(filename, function (data) {
      results[filename] = data;
      count--;
      if (count <= 0) {
        // Do something once we know all the files are read.
      }
    });
  });
});




var fs = require('fs');

function read_directory(path, next) {
  // function reads files in directory "."
  fs.readdir(".", function (err, files) {
    // declares a variable named count, an integer that is the length of the data returned from the 'files' argument
    var count = files.length,
    // results is an empty object
    results = {};
    // for each element in argument 'files' run this function
    files.forEach(function (filename) {
      //
      fs.readFile(filename, function (data) {
        // add new property named filename to object results, set value to data
        results[filename] = data;
        // drop count by one
        count--;
        if (count <= 0) {
          next(results);
        }
      });
    });
  });
}

function read_directories(paths, next) {
  // variable count, integer
  var count = paths.length,
  // object data
      data = {};
  // for each path element in argument 'paths' run this function
  paths.forEach(function (path) {
    // call function read directry
    read_directory(path, function (results) {
      data[path] = results;
      count--;
      if (count <= 0) {
        next(data);
      }
    });
  });
}

read_directories(['articles', 'authors', 'skin'], function (data) {
  // Do something
});
