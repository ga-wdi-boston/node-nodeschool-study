var fs = require('fs');

var contents = function (err, data) {
  console.log((data.toString().split('\n').length) - 1);
};
fs.readFile(process.argv[2], contents);
