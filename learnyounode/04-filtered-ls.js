var fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2],(_err, list) => {
  // console.log(list.filter((el) => path.extname(el)===".md"));
  list.forEach((el) => {
    if (path.extname(el)===".md")
    console.log(el);});
});
//
