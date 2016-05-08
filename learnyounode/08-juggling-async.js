'use strict';

let http = require('http');
let stdout = process.stdout;
let buff1 = [];
let buff2 = [];
let buff3 = [];
let count = 0;

http.get(process.argv[2], function (response){
  response.setEncoding('utf8');
  response.on('data', function (data) {
    buff1.push(data);
  });
  response.on('end', function () {
    count += 1;
    if (count ===3){
      console.log(buff1.join(''));
      console.log(buff2.join(''));
      console.log(buff3.join(''));
    }
  });
});

http.get(process.argv[3], function (response){
  response.setEncoding('utf8');
  response.on('data', function (data) {
    buff2.push(data);
  });
  response.on('end', function () {
    count =+ 1;
    if (count ===3){
      console.log(buff1.join(''));
      console.log(buff2.join(''));
      console.log(buff3.join(''));
    }
  });
});

http.get(process.argv[4], function (response){
  response.setEncoding('utf8');
  response.on('data', function (data) {
    buff3.push(data);
  });
  response.on('end', function () {
   count += 1;
   if (count ===3){
     console.log(buff1.join(''));
     console.log(buff2.join(''));
     console.log(buff3.join(''));
   }
  });
});
