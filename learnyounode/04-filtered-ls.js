let fs = require('fs');
let path = require('path');

fs.readdir(process.argv[2], function (err, list){
  if(err) {
    console.error(error.stack);
    return;
  }
  list.forEach(function (list) {
    console.log(path.extname(list));
  });
});
