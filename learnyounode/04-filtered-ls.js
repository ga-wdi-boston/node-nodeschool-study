var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function List(err, filelist) {
  filelist.forEach(function (file) {
    if (path.extname(file) === "." + process.argv[3])
      console.log(file);
  });
})
