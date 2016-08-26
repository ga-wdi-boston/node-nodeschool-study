
var fs = require('fs');
var path = process.argv[2];
var extention = process.argv[3];
fs.readdir(path, function (err, list) {
list.forEach(function(type) {
    if (path.extname(type) === '.' + process.argv[3])
      console.log(type);
    });
  });
