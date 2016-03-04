var fs = require('fs');

countLines = function(buffer) {
  return (buffer.toString().split(/\n/).length - 1)
}

var buf = fs.readFileSync(process.argv[2]);

console.log(countLines(buf));
