var fs = require('fs');

fs.readdir(process.argv[2], function(err, list) {
  var fileList = list.filter(function(filename){
    var fileExt = filename.split('.').pop();

    return fileExt === process.argv[3];
    });
  fileList.forEach(function(fname){
    if (fname === process.argv[3]) {
      console.log("");
    } else {
      console.log(fname);
    };
  });
});
