var fs = require('fs');
var path = require('path');

module.exports = function (dirName, fileExt, callback) {
  fs.readdir(dirName, function(err, data) {
  if (err) {
    return callback(err);
  };
var myarray =[];
  data.forEach(function(curr){
    if((curr).includes(fileExt) && (curr !== fileExt))
    {
    myarray.push(curr);
    }

  });
   callback(null, myarray);
});
};
