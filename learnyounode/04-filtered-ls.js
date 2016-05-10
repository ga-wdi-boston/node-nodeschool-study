'use strict';

let fs = require('fs');

fs.readdir(process.argv[2], (err, list) => {
  if (err) throw err;
  for (let i = 0; i < list.length; i++) {
    if (list[i].search(`.${process.argv[3]}`) !== -1) {
      console.log(`${list[i]}`);
    }
  }
});
