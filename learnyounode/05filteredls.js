
'use strict';

const fs = require('fs');
const path = require('path');

let file = process.argv[2];
let ext = '.'  process.argv[3];

function hasExtension(fileName) {
 return path.extname(fileName) === ext;
 }

function filterFiles(err, list) {
  if (err) {
   throw err;
 }
 list.forEach(function(fileName) {
   if (hasExtension(fileName)){
     console.log(fileName);
   }
  });
 }

fs.readdir(file, filterFiles);
