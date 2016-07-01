var fs = require('fs');

var filePath = process.argv[2];

fs.readFile(filePath, function(err, data) {
  if (err) {
    return false;
  } else {
    var fileString =  data.toString();
    var fileLineArray = fileString.split('\n');
    var lineCount = fileLineArray.length - 1;
    console.log(lineCount);
  }
}
);
