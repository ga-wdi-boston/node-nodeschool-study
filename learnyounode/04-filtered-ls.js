'use strict';

var fs = require("fs");
var path = require("path");

// let junk = fs.readdir((process.argv[2]), function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.extname("txt"));
// });

// let junk = fs.readdir((process.argv[2]), data.extname("txt"));
//     console.log(junk);




//
// let junk = fs.readdir(path, function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.extname("txt"));
// });


// fs.readdir(process.argv[2], function (err, path.extname("txt")) {
//     if (err) return console.error(err);
//     console.log(list)
// });


fs.readdir(process.argv[2], function (err, list) {
    if (err) return console.error(err);
    for (let i = 0; i < list.length; i++) {
      if (list[i].endsWith("."+(process.argv[3]))) {
        console.log(list[i]);
      }
    }
});

// .extname('txt')
