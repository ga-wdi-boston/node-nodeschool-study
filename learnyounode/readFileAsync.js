'use strict';

let fs = require('fs');

const countNewLines = (data) => {
  let  count = 0;
  return data.toString().split('\n').length - 1;
};

let text = fs.readFile( process.argv[2], function (err, data) {
  if(err){
    throw err;
  };
  console.log(countNewLines(data));
});
