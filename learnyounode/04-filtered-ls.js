var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

// Callback function for readdir

var filterExt = function(err, files){
  // Takes list of files from readdir, runs it through #forEach
  files.forEach(function(e){
    // runs if statement to see if file extention matches 'ext'
    if (path.extname(e) === ("." + ext)) {
      console.log(e);
    }
  });
};

fs.readdir(dir, filterExt);
