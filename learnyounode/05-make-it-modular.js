var mymodule = require('./04-filtered-ls.js');
var dir = process.argv[2];
var filterStr = process.argv[3];

var callback = function(err, list) {
  list.forEach(function(file) {
    console.log(file);
  })
};

mymodule(dir, filterStr, callback);

