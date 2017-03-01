const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
  let data = [];
  fs.readdir(dir, function (err, list) {
    if (err) return callback(err);
    for (let i = 0; i < list.length; i++) {
      if (path.extname(list[i]) === '.' + ext) {
        data.push(list[i]);
      }
    }
    return callback(null, data);
  });
};
