'use strict';

let fs = require('fs');

function listFiles() {
  fs.readdir(process.argv[2], function doneRead(err, list) {
    for (let i = 0; i < list.length; i++) {
      let tempArray = list[i].split('.');
      if (tempArray[1] === process.argv[3]) {
        console.log(list[i]);
      }
    }
  })
}

listFiles();
