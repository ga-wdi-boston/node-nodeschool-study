var fs = require('fs');

let getFilteredFiles = function (dir, fileExt, cb) {

    fs.readdir(dir, function(err, list){
      let filteredFiles = []
    for (let i = 0; i < list.length; i++) {
      let file = list[i];
      let fileSplit = file.split('.');
      if (fileSplit.length>1 && fileSplit[fileSplit.length-1] == fileExt) {
        filteredFiles.push(file);
      }
    }
    cb(null, filteredFiles);
  });
};

module.exports = {
  getFilteredFiles
}
