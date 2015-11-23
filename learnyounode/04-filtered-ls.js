var fs = require('fs');
var path = require('path')

var callback = function(err, list){
  if(err){
    console.error(err)
  }
  var filtered = list.filter(function(fileName){
    return path.extname(fileName) === "." + process.argv[3]
  });
  filtered.forEach(function(fileName){
    console.log(fileName);
  });
};

fs.readdir(process.argv[2], callback);
