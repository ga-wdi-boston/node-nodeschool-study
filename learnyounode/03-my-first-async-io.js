var fs = require('fs');

function callback (err, response) {
  var array = response.toString().split('\n');
  array.pop();
  console.log(array.length);
};

fs.readFile(process.argv[2], callback);
