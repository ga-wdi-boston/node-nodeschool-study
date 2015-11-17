var fs = require('fs');
var path = require('path');

module.exports = function(dir, filterExt, callback){

  fs.readdir(dir, function(err,list){

    if (err)
      return callback(err); // early return

    list = list.filter(function(file){
    return (path.extname(file) === '.'+ filterExt);
    });

    callback(null, list);
});
};
