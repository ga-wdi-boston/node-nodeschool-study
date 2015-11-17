var fs = require('fs');
var path = require('path');

// Get our console arguments
var dir = process.argv[2];
var ext = process.argv[3];

// Get the list of files at the given directory
// Pass a callback to do something with the list
var getFileList = function getFileList(dir, callback) {
    fs.readdir(dir, callback);
  };

// Filter a given list of files by the given type
var filterByType = function filterByType(files, type) {
  filtered = files.filter(function(file) {
    return path.extname(file) === type;
  });
  return filtered;
};

// Print a list of files at the given directory, filtered by the given type
var listFilesByExt = function listFilesByExt(dir, ext) {
  ext = '.' + ext;

  getFileList(dir, function(error, data) {
    var filtered = filterByType(data, ext);
    filtered.forEach(function(file) {
      console.log(file);
    })
  });

};

listFilesByExt(dir, ext);
