'use strict'

let fs = require('fs');
// let path = require('path');
//
// function filter(dir, ext) {
//   fs.readdir(dir, function(err, list) {
//     let files = list.toString().split(',');
//     for (let i = )
//     console.log(files);
//   })
// }
//
// fs.readdir(list, function(err, list) {
  // let files = list.toString();
})

function fileList(list, ext) {
  for (let i = 0; i < list.length; i++) {
    if (list[i]).extname === ('.' + ext) {
      list[i] = list[i]
    } else {
      list[i] = '';
    }
  }

  let list = list.string()
  console.log(list);
}

fs.readdir(list, fileList());
