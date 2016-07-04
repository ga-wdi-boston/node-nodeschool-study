'use strict'
let fs = require('fs');


fs.readdir(process.argv[2], function callback (err, list) {
  if (!err) {
    // console.log(list);
    for (let i = 0; i < list.length; i++) {
      if (list[i].endsWith("."+(process.argv[3]))) {
        console.log(list[i]);
      }
    }
  }
});
