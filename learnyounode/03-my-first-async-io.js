'use strict';

let fs = require('fs');

let Lines = function (err, buf){
    if (err) {
      throw err;
    } else {
    console.log(buf.split('\n').length - 1);
    }
};

fs.readFile(process.argv[2], 'utf8', Lines);
