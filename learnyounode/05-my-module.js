var fs = require('fs');
module.exports = function (dir, ext, callback){
  return fs.readdir(dir, function(err, list){
    if(err) return callback(err)
      var filtered = list.filter(function(file){
        return file.split('.')[1] === ext;
      });
      return callback(null, filtered);
  });
};
