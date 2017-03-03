'use strict';

let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (error, data) => {
  if (error) {
    console.error(error.stack);
    return;
  }

  let nameArray = data.split('\n');
  console.log(nameArray.length - 1);
});
