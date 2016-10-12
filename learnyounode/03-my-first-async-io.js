'use strict';

let fs = require('fs');

let filePath = process.argv[2];

let buf;

function processData(data){
  let numLines = data.split('\n').length - 1;
  console.log(numLines);
}

function read(err, data) {
  if (err) {
    throw err;
  }
  processData(data);
}

fs.readFile(filePath, 'utf8', read);
