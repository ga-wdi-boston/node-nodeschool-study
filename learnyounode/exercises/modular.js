var fs = require('fs');
var path = require('path');
var mymodule = require('./mymodule.js');

var filePath = process.argv[2];
var extension = process.argv[3];

var resultArray = mymodule(filePath, extension, function(err, list) {
  if (err) {
    return false;
  } else {
    fileCount = list.length;
    resultArray = [];
    for(var i = 0; i < fileCount; i++){
      if(path.extname(list[i]) === '.' + extension){
          resultArray.push(list[i]);
          console.log(list[i]);
        }
      }
      return resultArray;
    }
  }
);
