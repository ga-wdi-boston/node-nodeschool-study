const fs = require('fs');
const path = require('path');

var answer = function (dirName,extName, callback){
  fs.readdir(dirName, (err, data) => {
      if(err){
        return callback(err);
      }

      data.forEach(function(word){
       if(path.extname(word) === "."+ extName)
        callback (word);
      });
    });

};

module.exports = answer;
