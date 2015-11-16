var fs = require('fs');
var path = process.argv[2];
var extension = process.argv[3];

fs.readdir(path, function(err, list){
  if(err){
    return null;
  }
  var result = list.filter(function(filename){
    if(filename.substr(-(extension.length + 1)) === '.' + extension){
      return true;
    }
    return false;
  });

  result.forEach(function(filename){
    console.log(filename);
  });
});
