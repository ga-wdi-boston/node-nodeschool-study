var mymodule = require('./05-module.js');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(err, files){
  if (err){
    return console.error('error detected', err);
  }
    files.forEach(function(e){
      console.log(e);
    });
  });
