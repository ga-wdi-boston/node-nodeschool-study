var fs = require('fs');
var path = require('path');
var filter = require('./04-filtered-ls');

var dirname = process.argv[2];
var ext = process.argv[3];

filter(dirname, ext, function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
