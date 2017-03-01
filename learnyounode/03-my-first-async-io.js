var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, function (err, data) {
  newLines = data.toString().split('\n').length - 1;
  console.log(newLines);
});
