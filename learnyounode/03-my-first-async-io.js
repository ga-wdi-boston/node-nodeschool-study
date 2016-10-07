var fs = require('fs');

var countLines = function(err, buffer) {
  if (!err) {
    console.log(buffer.split('\n').length - 1);
  }
};

fs.readFile(process.argv[2], 'utf8', countLines);