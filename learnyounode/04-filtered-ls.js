var fs = require('fs');

fs.readdir(process.argv[2], function(err, list){
  for (let i = 0; i < list.length; i++) {
    let file = list[i];
    let fileSplit = file.split('.');
    if (fileSplit.length>1 && fileSplit[fileSplit.length-1] == process.argv[3]) {
      console.log(file);
    }
  }
});
