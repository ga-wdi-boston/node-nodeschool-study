var fs = require('fs');

function countNewlines (error, data) {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data.toString().split("\n").length - 1);
}

var inFileContents = fs.readFile(process.argv[2], countNewlines);
