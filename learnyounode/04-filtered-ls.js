var fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2],(err, list) => {
  // console.log(list.filter((el) => path.extname(el)===".md"));
  list.forEach((el) => {
    if (err){
    return callback(err);
    }
    if (path.extname(el)==="."+process.argv[3])
    console.log(el);});
});
//
