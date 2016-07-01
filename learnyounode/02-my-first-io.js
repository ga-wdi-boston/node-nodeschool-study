'use strict';

// var fs = require("fs");
//
// fs.toString();
//
// fs.readFileSync();
//
// var str = buf.toString().split("\n");
//
// console.log(str);


var fs = require('fs');
var array = fs.readFileSync().toString().split("\n");
for(i in array) {
    console.log(array[i]);
}
