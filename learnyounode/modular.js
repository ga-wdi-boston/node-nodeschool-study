const fs = require ('fs');
const path = require('path');

const test = function (dir, ext, callback) {
  let a =[];
  let call = function (err, data) {
    if (err){
      callback(err, null)
    } else {
        for (let i = 0; i < data.length; i++) {
          if ((data[i]) === ("." + ext)) {
            a.push(data[i]);
        }
    }
  }
  callback(null, a);
};
  fs.readdir(dir, call(err, data))
};

module.exports = {
  test
};
