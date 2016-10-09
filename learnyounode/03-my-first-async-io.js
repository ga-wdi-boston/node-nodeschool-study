var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, buffer) {
  if (err) {
    return console.log(err);
  }
  console.log(buffer.split('\n').length - 1);
});