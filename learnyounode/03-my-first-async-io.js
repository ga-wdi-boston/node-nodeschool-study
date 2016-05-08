'use strict';

let fs = require('fs');

fs.readFile(process.argv[2], {encoding: 'utf8'}, (error, data) => {
  if (error) {
    console.error(error.stack);
  }else {
    console.log(data.split('\n').length -1);
  }
});





// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
