var mymodule = require('./05-modular-filter.js');

var directory = process.argv[2];
var extension = process.argv[3];

mymodule(directory, extension, function(err, data){
  data.forEach(function(item){
    console.log(item);
  });
});

