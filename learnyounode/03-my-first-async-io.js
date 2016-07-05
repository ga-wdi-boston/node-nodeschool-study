'use strict';
var fs = require('fs');
fs.readFile(process.argv[2], (err, buf) => {
  if (err) throw err;
  let full = buf.toString();
  let pieces = full.split('\n');
  console.log((pieces.length) - 1);
});
