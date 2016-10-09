// print a list of files in the directory
// show only files w/extension matching argument
// passed to program

var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, files) {
  var ext = process.argv[3];
  files.forEach(function (file) {  
    if (path.extname(file).substring(1) === ext) {
      console.log(file);
    }
  });
});