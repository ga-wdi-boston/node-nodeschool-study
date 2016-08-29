var fs = require('fs');
var path = process.argv[2];

fs.readFile(path, function (err, result){
  var str = result.toString().split("\n").length -1;
console.log(str);
});
