'use strict';
let fs = require('fs');
let arr = [];
let num;

function read(callback) {
  fs.readFile(process.argv[2], function doneRead(err, fileContents) {
    arr = fileContents.toString().split('\n');
    num = arr.length - 1;
    callback();
  });
}

function logNum() {
  console.log(num);
}

read(logNum);




// var fs = require('fs')
// var myNumber = undefined
//
// function addOne(callback) {
//   fs.readFile('number.txt', function doneReading(err, fileContents) {
//     myNumber = parseInt(fileContents)
//     myNumber++
//     callback()
//   })
// }
//
// function logMyNumber() {
//   console.log(myNumber)
// }
//
// addOne(logMyNumber)
