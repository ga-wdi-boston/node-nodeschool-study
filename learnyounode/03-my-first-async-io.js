var fs = require('fs');

var cb = function cb(err, data){
  if (err){
    console.log(err);
  }else {
    var str = (data.toString().split('\n').length) - 1;
    console.log(str);
  }
};

fs.readFile(process.argv[2], cb);
