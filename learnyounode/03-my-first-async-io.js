'use strict';

let fs = require('fs');

function plusOne() {
  fs.readFile(process.argv[2], function finishedRead(err, fileContents){
    let string = fileContents.toString();
    let array = string.split('\n');
    let count = array.length;
    console.log(count - 1 );
  })
}

plusOne();
