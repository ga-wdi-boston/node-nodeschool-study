var fs = require('fs');

filterList = function (err, list) {
  list.forEach(function(cV, i, array) {
    if (cV.endsWith('.' + fileExt)) {
      console.log(cV);
    }
  })
}

var path = process.argv[2];
var fileExt = process.argv[3];

fs.readdir(path, filterList)
