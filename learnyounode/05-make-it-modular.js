'use strict';
let fs = require('fs');
let mymodule = require('./05-module.js');

let directory = process.argv[2];
let extenstion = process.argv[3];

function listFiles() {
  fs.readdir(directory, function doneRead(err, list){
    for (let i = 0; i < list.length; i++) {
      // I can't seem to pass the err catch for some reason.
      // if (err) {
      //   return doneRead(err);
      //   console.error('There was an error', err);
      //   return;
      // }
      let tempArray = list[i].split('.');
      if (tempArray[1] === extenstion) {
        console.log(list[i]);
      }
    }
  })
}

mymodule(directory, extenstion, listFiles);

//
//
// var fs = require('fs')
//      var path = require('path')
//
//      var folder = process.argv[2]
//      var ext = '.' + process.argv[3]
//
//      fs.readdir(folder, function (err, files) {
//        if (err) return console.error(err)
//        files.forEach(function(file) {
//            if (path.extname(file) === ext) {
//                console.log(file)
//            }
//        })
//      })
