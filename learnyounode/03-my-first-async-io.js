var fs = require('fs');
var file = process.argv[2];
var buffer = " ";
fs.readFile(file, 'utf8', function(err, data) {
  if (err) throw err;
  else buffer = data;
  var splitStr = buffer.split("\n");
  console.log(splitStr.length-1);
});
// var str = buffer.toString();
// var splitStr = buffer.split("\n");
// console.log(splitStr.length-1);
