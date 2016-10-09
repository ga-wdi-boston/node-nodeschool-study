// You must write a module file to do most of the work. The module must  
//   export a single function that takes three arguments: the directory name,  
//   the filename extension string and a callback function, in that order. The  
//   filename extension argument must be the same as what was passed to your  
//   program. Don't turn it into a RegExp or prefix with "." or do anything  
//   except pass it to your module where you can do what you need to make your  
//   filter work. 

var fs = require('fs');
var path = require('path'); 

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function(err, data) {
    if (err) { 
      return callback(err);
    }
    // filter list of files
    data = data.filter(function(file) {
      return path.extname(file) === '.' + ext;
    });
    callback(null, data);
  });
};