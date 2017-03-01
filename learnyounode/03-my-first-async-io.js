let fs = require('fs');

const newLines = function (err, string) {
  console.log((string.toString().split('\n').length) - 1);
};

fs.readFile(process.argv[2], newLines);
