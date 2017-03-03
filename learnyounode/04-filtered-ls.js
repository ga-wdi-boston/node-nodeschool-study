const fs = require ('fs');
const path = require('path');

const test = function (err, data) {
  if (!err) {
    for (let i = 0; i < data.length; i++) {
      if (path.extname(data[i]) === ("." + process.argv[3])) {
        console.log(data[i]);
      }
      }
    }

};

fs.readdir(process.argv[2], test);
