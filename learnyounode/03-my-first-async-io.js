'use strict';

let fs = require('fs');

let filepath = process.argv[2];

function processData(data){
  let numlines = data.split('\n').length - 1;
  console.log(numlines);
}

function read(err, data) {
  if (err) {
    throw err;
  }
  processData(data);
}

fs.readFile(filepath, 'utf8', read);
