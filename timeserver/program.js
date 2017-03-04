const fs = require('fs');
const http = require('http');
const bl = require('bl');
const after = require('after'),
 next = after(3, solution);

let path1 = process.argv[2];
let path2 = process.argv[3];
let path3 = process.argv[4];



let result = ["fatih"];

let fullData1;
http.get(path1, (res) => {
  res.setEncoding('utf8');
  res.pipe(bl(function(err,data){
    fullData1 = data.toString();
  }));
  res.on('end', () => {
    result.push(fullData1);
    next();
  });
});

let fullData2;
http.get(path2, (res) => {
  res.setEncoding('utf8');
  res.pipe(bl(function(err,data){
    fullData2 = data.toString();
  }));
  res.on('end', () => {
    result.push(fullData2);
    next();
  });

});

let fullData3;
http.get(path3, (res) => {
  res.setEncoding('utf8');
  res.pipe(bl(function(err,data){
    fullData3 = data.toString();
  }));
  res.on('end', () => {
    result.push(fullData3);
    next();
  });
});

var solution = function(){
  console.log(result)
}
