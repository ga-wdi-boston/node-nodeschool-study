  var fs = require("fs");
  var path = require("path");


  module.exports = function (dirname, extension, callback){

    fs.readdir(dirname, function(err, list) {
      if (err) {
        return callback(err);
      }
      var matches = list.filter(function(file){
      return path.extname(file) === ("." + extension);
    }); //end of forEach()
      callback(err, matches);
  });
};
