var mymodule = require('./05-make-it-modular-module.js');
var dir = process.argv[2];
var extStr = process.argv [3];

mymodule(dir, extStr, function (err, data) {
  if (err){
    return err;
  }
  data.forEach(function (file) {
    console.log(file)
  });
});
