'use strict'

let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    let strSplit = data.toString().split('\n').length-1
    console.log(strSplit);
});
