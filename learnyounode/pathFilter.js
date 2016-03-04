'use strict';
let fs = require('fs');
let readFiles = function(dir, ext, callback){
  fs.readdir(dir, function(err, files, ext) {
    if (err) return  callback(err);
    else callback(null, files, ext);
  });
}
module.exports = readFiles();
