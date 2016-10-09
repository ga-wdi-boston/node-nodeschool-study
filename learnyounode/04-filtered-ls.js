'use strict';
const fs = require('fs');

let extractFileExt = function(element) {
  if (element.slice(element.indexOf('.')+1) === this && element.indexOf('.') > 0) {
    return element;
  } else {
    return;
  }
};

// console.log(fs.readdir(process.argv[2]));
fs.readdir(process.argv[2], function(err, list){
  if (err) {
    console.error(err);
  } else {
    list.filter(extractFileExt, process.argv[3]).forEach(function(element){
      console.log(element);
    });
  }
});

/* official solution involves path.extname */
