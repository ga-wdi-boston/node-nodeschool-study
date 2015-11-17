var myModule = require('./05-make-it-modular-filter.js');

var arg01 = process.argv[2];
var arg02 = process.argv[3];

myModule(arg01, arg02, function (error, files) {
  if (error) {
    console.log(error);
  }
  files.forEach(function (file) {
      console.log(file);
  });

});
