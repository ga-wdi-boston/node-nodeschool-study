'use strict';

 let fs = require('fs');
 let mod = require('./05-module.js')

let dir = process.argv[2];
let ext = process.argv[3];
let filter = new RegExp('\\' + ext + '$');

mod.readfile(dir, ext, function(err, data) {
     if (err) console.log(err);
     data.map(function(x) {
         console.log(x);
     });
});
