module.exports = function extentionFilter(dirName, extention, callback){
  var fs = require('fs');
  var path = require('path')

  var errorHandler = function(err, list){
    if(err){
     return callback(err)
    }
    var filtered = list.filter(function(fileName){
      return path.extname(fileName) === "." + extention
    });
    return callback(null, filtered)
  }

  fs.readdir(dirName, errorHandler);
};
