var fs = require('fs');

countLines = function(er, data) {
  console.log(data.toString().split(/\n/).length - 1)
}

fs.readFile(process.argv[2], countLines);
