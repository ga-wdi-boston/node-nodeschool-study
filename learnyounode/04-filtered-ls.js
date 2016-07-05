'use strict';
var fs = require('fs');
fs.readdir(process.argv[2], (err, list) => {
  if (err) throw err;
  let fileType = "." + process.argv[3];
  for (let i =0; i<list.length; i ++) {
    if (list[i].includes(fileType)) {
        console.log(list[i])
      }
    }
});
