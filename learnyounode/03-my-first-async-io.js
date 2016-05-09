'use strict';

let fs = require('fs');

let filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data) {
  console.log(data.split('\n').length - 1);
});
