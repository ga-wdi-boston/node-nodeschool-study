'use strict';
let path = require('path');
let Pathfilter = require('./pathFilter.js');
pathFilter(process.argv[2], process.argv[3], filter);

let filter = function(err, files, ext){
  files.forEach(function(file){
    if (path.extname(file) === ('.' + ext)){
      console.log(file);
    }
  });
}
