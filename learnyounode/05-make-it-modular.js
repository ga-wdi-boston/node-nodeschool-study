// print a list of files in the directory
// show only files w/extension matching argument
// passed to program



var myModule = require('./05-module.js');

myModule(process.argv[2], process.argv[3], function (err, files) {
  if (err) {
    console.log('error:', err);
  }
  // mymodule is already filtering data
  files.forEach(function(file) {
    console.log(file);
  });
});
