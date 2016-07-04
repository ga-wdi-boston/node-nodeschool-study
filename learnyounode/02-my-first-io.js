// 'use strict';
//
// var fs = require("fs");
//
// // fs.toString();
// //
// // fs.readFileSync(process.argv[2]);
// //
// // var str = buf.toString().split("\n");
// //
// // console.log(str);
//
//
// console.log(fs.readFileSync(process.argv[2]).toString());
// // var fs = require('fs');
// // var array = fs.readFileSync(process.argv[2]).toString().split("\n");
// // for(i in array) {
// //     console.log(array[i]);
// // // }
//
// var fs = require('fs');
// var array = fs.readFileSync(process.argv[2]).toString().split("\n");
// for(i in array) {
//     console.log(array[i]);
// }

'use strict';
const fs = require('fs');
console.log(fs.readFileSync(process.argv[2]).toString().split("\n").length-1);
