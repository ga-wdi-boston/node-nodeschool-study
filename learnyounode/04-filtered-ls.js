var fs = require('fs');
var fileExtension = process.argv[3];

function callback (err, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].includes('.' + fileExtension)) {
      console.log(list[i]);
    }
  }
};

fs.readdir(process.argv[2], callback)
