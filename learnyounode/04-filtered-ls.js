'use strict';

let fs = require('fs');
let path = require('path');

let filename = process.argv[2];

let ext ="."+process.argv[3];

fs.readdir(filename, function(err, list) {
    if (!err) {
      list.forEach( function(file, i){
if (path.extname(file) === '.' + process.argv[3]) {
console.log(file);
}
});
}
});
