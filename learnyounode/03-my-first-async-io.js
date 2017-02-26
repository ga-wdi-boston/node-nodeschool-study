let fs = require('fs');

let readDocument = fs.readFile(process.argv[2], function callback (err, documentLines) {
  if (err) {
  console.log(err);
}

  finalDocument = documentLines.toString().split('\n').length-1;

console.log(finalDocument);
});
