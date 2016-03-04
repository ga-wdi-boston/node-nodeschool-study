var fs = require('fs');
var path = require('path');

var givenPath = process.argv[2];
var ext = process.argv[3];

fs.readdir(givenPath, function (err, data) {
  for (var i = 0; i < data.length; i++) {

    var just = path.extname(data[i]);

    if ('.'+ext === just) {
      console.log(data[i]);
    }
  }
});
