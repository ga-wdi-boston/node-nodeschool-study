var fs = require('fs');
var path = process.argv[2];
var extention = process[3];
fs.readdir(path, function (err, list) {
  for (var i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === extension) {
      console.log(list[i]);
    }
  }
});
