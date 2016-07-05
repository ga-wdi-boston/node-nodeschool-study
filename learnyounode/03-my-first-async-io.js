var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function (err, contents) {
  var lines = contents.toString().split('\n').length - 1;
  console.log(lines);
});

// Remember that idiomatic Node.js callbacks normally have the signature:
//     function callback (err, data) { /* ... */ }
// If there is no error, you should have your Buffer
//   object as the second argument.
