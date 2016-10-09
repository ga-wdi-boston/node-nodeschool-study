var fs = require('fs');
var path = require('path');
var file = process.argv[2];
var filter = '.' + process.argv[3];

fs.readdir(file, function callback (err, list) {
  if (err) {
    console.error(err);
    return;
  }

  list.forEach(function(file_name) {
    if (path.extname(file_name) === filter) {
      console.log(file_name);
    }
  });
});
