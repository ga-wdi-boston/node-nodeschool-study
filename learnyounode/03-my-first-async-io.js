
'use strict';
// var err = "Wrong!";
// const fs = require('fs');
// function callback (err, "utf-8");
// console.log(fs.readFile(process.argv[2], callback).toString().split("\n").length-1, callback);
//

var fs = require("fs");

let junk = fs.readFile(process.argv[2], function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString().split("\n").length-1);
});


//console.log("Program Ended");
