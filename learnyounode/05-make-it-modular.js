'use strict';

const path = require('path');
let mymodule = require('./05-module.js');

let directory = process.argv[2];
let extenstion = process.argv[3];


function callback(error, list){
    if (error) {
      console.log(error);
    }
    list.forEach(function(file){
      console.log(file);
    });
}


mymodule(directory, extenstion, callback);
