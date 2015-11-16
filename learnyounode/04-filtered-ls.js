var fs = require('fs');
var path = require('path');

var cb = function cb(err, list){
  if (err){
    console.log(err);
  }else {
      var ext = '.' + process.argv[3];
      list.forEach(function(x){
        if (path.extname(x) === ext){
          console.log(x);
        }
      })
    };
};

fs.readdir(process.argv[2], cb);
