var fs = require('fs');

var path = process.argv[2];

fs.readFile(path,'utf8', function (err, data) {
  if (err) throw err;
  var arrayContent = data.split(/\n/);
  var length = arrayContent.length-1;
  console.log(length);
});
