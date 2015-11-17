var fs = require('fs');
var path = require('path');


module.exports = function(dirName, extFilter, callback){
  fs.readdir(dirName, function cb(err, list){
    if (err){
      return callback(err, null);
    //console.log('We\'re getting an error: ' + err);
    }else {
      result = [];
      list.forEach(function(x){
        if (path.extname(x) === '.' + extFilter){
          result.push(x);
        };
      });
      callback(null, result);
    };
  });
};



