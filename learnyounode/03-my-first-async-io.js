var fs = require('fs');
var fileName = process.argv[2];
var bufFile = fs.readFile(fileName, 'utf8', function callback (err, data) {
  var strFile = data.toString();
  var count = strFile.split('\n');
  console.log(count.length - 1);
});
