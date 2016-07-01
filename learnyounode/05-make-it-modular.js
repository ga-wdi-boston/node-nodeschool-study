'use strict';
let myFunction = require('./module.js');
let extension = process.argv[3];
let files = process.argv[2]
  myFunction(files, extension, (err, list) => {
  if (err) throw err;
  for (let i =0; i<list.length; i ++) {
    if (list[i].includes("." + extension)) {
        console.log(list[i]);
      }
    }
  });
