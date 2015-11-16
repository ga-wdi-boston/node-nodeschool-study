var fs = require('fs');
var path = require('path');

var cb = function (err, list) {
  list.forEach(function(file) {
    if(path.extname(file) === '.' + process.argv[3]) {
      console.log(file);
    }
  });
};

fs.readdir(process.argv[2], cb);


// Asynchronous readdir(3). Reads the contents of a directory. The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.
