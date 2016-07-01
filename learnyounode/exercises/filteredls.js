var fs = require('fs');
var path = require('path');

var filePath = process.argv[2];
var extension = process.argv[3];

fs.readdir(filePath, function(err, list) {
  if (err) {
    return false;
  } else {
    fileCount = list.length;
    for(var i = 0; i < fileCount; i++){

      // var splitFile = list[i].split('.');
      //
      // var stringCount = splitFile.length;
      // if(stringCount < 2){
      //   var finalString = splitFile;
      // } else {
      //   var finalString = splitFile[splitFile.length - 1];
      // }
      //
      // if(finalString === extension){
      //   console.log(list[i]);
      // }

      testPath = path.extname(list[i]);

      if(testPath === extension){
          console.log(list[i]);
        } else if (list[i] === extension){
          console.log(list[i]);
        }
      }
    }
  }
);
