'use strict';

const fs = require('fs');

let filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function(err,data) {
  console.log(data.split("\n").length - 1);
});
