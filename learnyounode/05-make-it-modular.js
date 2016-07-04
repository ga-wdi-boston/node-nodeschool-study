'use strict'

let myModule = require('./05-my-module.js');
let arr = [];
let filter = function(err, list){
  if (err) throw err
    list.forEach(function(file) {
      if (file.split('.')[1] === process.argv[3])
          console.log(file);
      });
      return list;
    }
myModule(process.argv[2], process.argv[3], filter);
