'use strict';

let fs = require('fs');
module.exports = function (directory, ext1, callback){
   return fs.readdir(directory, function(err, list){
             if (err) return callback(err)
             let filtered = list.filter(function(file){
                  return file.split('.')[1] === process.argv[3];
               });
             return callback(null, filtered);
        });
};
