var fs = require('fs');
var text = process.argv[2];

fs.readFile(text, function(err, contents){
  var lines = contents.toString().split('\n').length -1;
  console.log(lines);
});
