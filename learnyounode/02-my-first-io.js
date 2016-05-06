var fs = require('fs');
var contents = fs.readFileSync(process.argv[2], 'utf8');
var lines = contents.split('\n');
console.log(lines.length - 1);





// var fs = require('fs');
// fs.readFile(process.argv[2], 'utf8', function(err, contents) {
//   var lines = contents.split('\n');
//   console.log(lines.length - 1);
// });

// Best practice? top solution is slightly smaller
