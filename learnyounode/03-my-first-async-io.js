'use strict';

let fs = require('fs');
let buffer = ' ';

fs.readFile(process.argv[2], 'utf8', function(err, data) {
      buffer = data;
      let newBuff = buffer.split('\n').length - 1;
      console.log(newBuff);
});
