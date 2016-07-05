// The fs.readdir() method takes a pathname as its first argument and a
//  callback as its second. The callback signature is:
//
//     function callback (err, list) { /* ... */ }
//
//  where list is an array of filename strings.

var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err);
  files.forEach(function(file) {
      if (path.extname(file) === ext) {
          console.log(file)
      };
  });
});
