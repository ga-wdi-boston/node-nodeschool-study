var fs = require('fs');

var callback = function callback(err, data) {
  var lines = data.toString().split('\n').length - 1;
  console.log(lines);
}

fs.readFile(process.argv[2], callback);

