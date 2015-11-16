
var fs = require('fs');
var file = process.argv[2];

var content = fs.readFile(file, 'utf-8', function(error, data) {
  if (error) {
    console.error(error);
  }

  var lines = data.split('\n').length-1;
  console.log(lines);

});




