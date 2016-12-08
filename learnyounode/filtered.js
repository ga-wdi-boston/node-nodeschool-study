
'use strict'
let fs = require('fs');

let filePath = process.argv[2];

fs.readdir(filePath, (err, data) => {
 for(let i in data) {
 let fName = data[i].split('.');
  if(fName[1] == 'md'){
   console.log(data[i]);
  }
 }
});
